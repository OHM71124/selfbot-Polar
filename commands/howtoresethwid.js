const Discord = require("discord.js")

module.exports = {
    name: ["howtoresethwid", "htrs"],
    description: 'วิธี redeem แต่ละเกม',
    async execute (message, args, color, command) {
        const lang = args[0] || "th"

        const title = {
            "th": {
                "title": "วิธี ResetHwid",
                "description": `\
                    1. ไปที่ห้อง <#832096381199450112>
                    2. พิมพ์ \`!resethwid<เกม> <แท็กตัวเอง>\` เช่น \`!resethwidbf\` <@336092453918736386>
                    ** สามารถ ResetHwid ฟรีได้แค่ 2 ครั้ง เท่านั้น ** \
                `
            },
            "en": {
                "title": "How to ResetHwid",
                "description": `\
                    1. Go to <#832096381199450112>
                    2. type \`!resethwid<game> <tag yourself>\` เช่น \`!resethwidbf\` <@336092453918736386>
                    ** You can only ResetHwid TWICE. ** \
                `
            }
        }

        const exampleEmbed = new Discord.RichEmbed()
            .setColor(color.blue)
            .setTitle("**" + title[lang]["title"] + "**")
            .setDescription(title[lang]["description"])

        message.channel.send(exampleEmbed)
    }
}