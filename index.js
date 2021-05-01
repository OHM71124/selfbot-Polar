const discord = require("discord.js");

const client = new discord.Client();


const setting = require("./setting.json")
const color = require("./color")

const prefix = setting.prefix
const fs = require("fs");

client.commands = new discord.Collection();

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

for (const file of getFiles('./commands/')) {
    const command = require(file)
    if (Array.isArray(command.name)) {
        for (let i = 0; i < command.name.length; i++) {
            client.commands.set(command.name[i], command)
        }
    } else {
        client.commands.set(command.name, command)
    }
}

client.on('ready', () => {
    console.log(setting.name + " " + setting.version + " is Online Now!")
})

client.on('message', async (message) => {
    if (message.author.id == setting.discordid || setting.alloweveryone == true) {
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        try {
            client.commands.get(command).execute(message, args, color, command, client);
        } catch {}
    }
})

client.login(setting.token)