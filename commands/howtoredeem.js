const Discord = require("discord.js")
const gamethumnail = require("../game.json")

module.exports = {
    name: ["redeemgpo", "redeembf", "redeemkp"],
    description: "วิธี redeem แต่ละเกม | How to Redeem Key",
    async execute (message, args, color, command) {
        const lang = args[0] || "th"

        const title = {
            "th": {
                "title": `วิธี Redeem เกม ${command.substring("redeem".length, command.length).toUpperCase()}`,
                "description": `\
                    1. ทักหา <@834800244847673386>
                    2. พิมพ์ \`!${command} <key>\` ตัวอย่าง \`!${command} Polarhub\`
                    3. พิมพ์ \`!getscript${command.substring("redeem".length, command.length)}\` ในช่อง <#832096381199450112> เพื่อรับสคริปท์! \
                `
            },
            "en": {
                "title": `How to redeem script ${command.substring("redeem".length, command.length).toUpperCase()}`,
                "description": `\
                    1. dm to <@834800244847673386>
                    2. type \`!${command} <key>\` Ex. \`!${command} Polarhub\`
                    3. type \`!getscript${command.substring("redeem".length, command.length)}\` in <#832096381199450112> to get script! \
                `
            }
        }

        const exampleEmbed = new Discord.RichEmbed()
            .setColor(color.blue)
            .setTitle("**" + title[lang]["title"] + "**")
            .setThumbnail(gamethumnail["game"][command])
            .setDescription(title[lang]["description"])
            // .setTimestamp()
            // .setFooter('ขอบคุณที่ใช้งานสคริปท์เรานะครับ :3', 'https://imgur.com/rpA6UP0.png');

        message.channel.send(exampleEmbed);
    }
}