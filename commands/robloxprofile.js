const Discord = require("discord.js")
const fetch = require("node-fetch")

module.exports = {
    name: ["rp", "rprofile", "robloxprofile"],
    description: 'เช็คโรบ็อกโปรไฟล์ | Check roblox profile',
    async execute (message, args, color, command) {
        Date.prototype.formatMMDDYYYY = function(){
            return (this.getMonth() + 1) + 
            "/" +  this.getDate() +
            "/" +  this.getFullYear();
        }
        
        const loadingEmbed = new Discord.RichEmbed()
            .setColor(color.red)
            .setTitle("Loading Data ...")
        let msg = await message.channel.send(loadingEmbed)

        var responseId = await fetch(`https://api.roblox.com/users/get-by-username?username=${args[0]}`)
        var userid = await responseId.json(); // dataresponse
        
        if (userid.Username) {
            var responseInfo = await fetch(`https://users.roblox.com/v1/users/${userid.Id}`)
            var thumnailpng = await fetch(`https://www.roblox.com/bust-thumbnail/image?userId=${userid.Id}&width=100&height=100&format=png`)
            var datainfo = await responseInfo.json();
            
            let description = datainfo.description || "not set"

            var date = new Date(datainfo.created)

            const exampleEmbed = new Discord.RichEmbed()
                .setTitle("Profile Link")
	            .setURL(`https://www.roblox.com/users/${userid.Id}/profile`)
                .setColor(color.blue)
                .setThumbnail(thumnailpng.url)
                .addField('Name', datainfo.name)
                .addField('DisplayName', datainfo.displayName)
                .addField('Id', datainfo.id, true)
                .addField('isBanned', datainfo.isBanned, true)
                .addField('Created At', date.formatMMDDYYYY(), true)
                .addField('Description', description)

            msg.edit(exampleEmbed)
        } else {
            const exampleEmbed = new Discord.RichEmbed()
                .setColor(color.red)
                .setTitle("Not Found This Username")
            msg.edit(exampleEmbed)
        }
        
    }
}