const Discord = require("discord.js")
const fs = require("fs")
const setting = require("../setting.json")

module.exports = {
    name: ["alloweveryone", "al"],
    description: 'เปิดให้ใช้งานทุกคน',
    async execute (message, args, color, command) {
        if (message.author.id == setting.discordid) {
            function writesettingnew(bool) {
                setting.alloweveryone = bool
                const data = JSON.stringify(setting, null, 4);
                fs.writeFile('./setting.json', data, (err) => {
                    if (err) throw err;
                });
            }

            switch (args[0]) {
                case "true":
                    writesettingnew(true)
                    var exampleEmbed = new Discord.RichEmbed()
                        .setColor(color.green)
                        .setTitle('Allow Everyone Success')
                        .setDescription(`คุณเปลี่ยน Commands ให้ใช้ได้ทุกคน!!!`)
                    message.channel.send(exampleEmbed)
                    break;
                case "false":
                    writesettingnew(false)
                    var exampleEmbed = new Discord.RichEmbed()
                        .setColor(color.green)
                        .setTitle('Allow Everyone Success')
                        .setDescription(`คุณเปลี่ยน Commands ให้ใช้ได้แค่คุณคนเดียว!!!`)
                    message.channel.send(exampleEmbed)
                    break;
                default:
                    var exampleEmbed = new Discord.RichEmbed()
                        .setColor(color.red)
                        .setTitle('Allow Everyone Fail')
                        .setDescription(`กรุณากรอกข้อมูล true|false เช่น ${setting.prefix}alloweveryone false`)
                    message.channel.send(exampleEmbed)
            }    
        }
    }
}