const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("GREEN")

    .setTitle("BJouneBot Yardım Menüsü")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📗 | -mod", `__Mod komutlarını gösterir__`)

    .addField("📘 | -eğlence", `__Eğlence komutlarını gösterir.__`)

    .addField("📙 | -extra", `__Extra komutları gösterir.__`)
  
    .addField("📔 | -gif",`__Gif komutlarını gösterir.__`)
  
    .addField("📓 | -yeni",`__Hergün güncellenen bottaki yenilikleri gösterir.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot) | [Destek](https://discord.gg/xnd8cexRkF) "
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help", "h", "y", "yardım"]
};

exports.help = {
  name: "yardım",

  description: "Yardım Menüsünü Açar",

  usage: "yardım"
};
