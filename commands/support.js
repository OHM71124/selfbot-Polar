const Discord = require("discord.js")

module.exports = {
    name: ["support", "sp"],
    description: 'Support Exploit',
    async execute (message, args, color, command) {
        const description = "Synapse X  - Sentinel - Krnl \n Sirhurt - Proto - Electron   "

        const exampleEmbed = new Discord.RichEmbed()
            .setColor(color.blue)
            .setTitle("**Support Exploit**")
            .setDescription(description)
            .setImage('https://i.vgy.me/1r5JxI.png')
            // .setTimestamp()
            // .setFooter('ขอบคุณที่ใช้งานสคริปท์เรานะครับ :3', 'https://imgur.com/rpA6UP0.png');

        message.channel.send(exampleEmbed);
    }
}