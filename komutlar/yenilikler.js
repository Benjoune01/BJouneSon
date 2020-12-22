const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("GREEN")

    .setTitle("BJouneBot Yenilikler")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📓 | Canlı destek komudu eklendi.", `__Extra menüsünde.__`)

    .addField("📓 | Gif menüsü eklendi.", `__-gif yazabilirsiniz.__`)

    .addField("📓 | Yeni eğlence komutları eklendi.", `__Eğlence menüsünde.__`)
  
    .addField("📓 | Extra menüsüne iki yeni komut eklendi.",`__-extra yazarak ulaşabilirsiniz.__`)
  
    .addField("📓 | Yılbaşı komutu eklendi.",`__Extra menüsünde yılbaşına ne kadar kaldığını gösterir. [Yılbaşından sonra kalkıcak.]__`)
  
    .addField("📓 | Rol verme ve rol alma eklendi.",`__Mod menüsünde yer almakta.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot) | [Destek](https://discord.gg/xnd8cexRkF) "
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["yenilikler", "yeni"]
};

exports.help = {
  name: "yenilikler",

  description: "Yenilik Menüsünü Açar",

  usage: "yenilikler"
};
