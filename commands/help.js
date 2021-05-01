const Discord = require("discord.js")
const setting = require("../setting.json")

module.exports = {
    name: ["help"],
    description: 'คำสั่งต่างๆ All Commands',
    async execute (message, args, color, command, client) {
        let commandArray = {}
        let description = "**สามารถเติม `en` ในบางคำสั่ง เพื่อเปลี่ยนข้อความเป็นภาษาอังกฤษ!**\n"


        client.commands.forEach((value) => {
            commandArray[value["description"]] = value["name"]
        })

        for (let key in commandArray) {
            description += `\`${setting.prefix}` + commandArray[key].join(` ${setting.prefix}`) + "`" + " " + key + "\n"
        }

        const exampleEmbed = new Discord.RichEmbed()
            .setColor(color.blue)
            .setTitle("**คำสั่งต่างๆ Self Bot Polar Commands**")
            .setDescription(description)
        message.channel.send(exampleEmbed)
    }
}