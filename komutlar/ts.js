const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setTitle("TS3")

    .addField("TeamSpeak 3 İp", `__185.148.242.214:9007__`)

    .setDescription("[Diamond Rp Yönetim]");

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["ts", "ts3"]
};

exports.help = {
  name: "ts",

  description: "Yenilik Menüsünü Açar",

  usage: "ts"
};
