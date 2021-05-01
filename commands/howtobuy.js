const Discord = require("discord.js")

module.exports = {
    name: ["howtobuy", "htb"],
    description: 'วิธีซื้อสคริปท์',
    async execute (message, args, color, command) {
        const lang = args[0] || "th"

        const title = {
            "th": {
                "title": "วิธีการซื้อสคริปท์ต่างๆ ของ Polarhub",
                "description": `\
                    1. เข้าไปยังเว็บไซต์ https://polarhub.xyz
                    2. กดสมัคร และล็อกอินให้เรียบร้อย
                    3. กดเติมเงินด้วยระบบอั่งเปา ที่ "เติมเงิน" จากแถบด้านบน
                    4. และกดเข้าไปซื้อสคริปท์ ที่ "สินค้า" จากแถบด้านบน 
                    *** อย่าลืมอ่าน <#837294142462754816> ก่อนซื้อนะครับผม*** \
                `
            },
            "en": {
                "title": "How to buy script Polarhub?",
                "description": `\
                    1. Go to https://sellix.io/polarhubcompany
                    2. Choose whatever script do you want.
                    3. Click Purchase and pay with Paypal. 
                    *** Don't forget to read <#837294142462754816> before you buy the script.***\
                `
            }
        }

        const exampleEmbed = new Discord.RichEmbed()
            .setColor(color.blue)
            .setThumbnail("https://imgur.com/5OQob76.png")
            .setTitle("**" + title[lang]["title"] + "**")
            .setDescription(title[lang]["description"])
            // .setTimestamp()
            // .setFooter('ขอบคุณที่ใช้งานสคริปท์เรานะครับ :3', 'https://imgur.com/rpA6UP0.png');

        message.channel.send(exampleEmbed);
    }
}