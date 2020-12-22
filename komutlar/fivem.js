const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setTitle("FİVEM")

    .addField("Fivem F8 İp", `__185.148.242.215:30120__`)

    .setDescription("[Diamond Rp Yönetim]");

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["ip", "f8"]
};

exports.help = {
  name: "ip",

  description: "Yenilik Menüsünü Açar",

  usage: "ip"
};
