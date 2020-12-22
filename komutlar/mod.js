const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("RED")

    .setTitle("BJoune Mod Menüsü")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📗 | -ban", `__Etiketlediğiniz kişiyi sunucuda yasaklar.__`)
  
    .addField("📗 | -force-ban",`__Sunucuda olmayan birine zorla ban atar.[ÇALIŞMIYOR.]__`)

    .addField("📗 | -kick", `__Etiketlediğiniz kişiyi suucudan atar.__`)

    .addField(
      "📗 | -unban",
      `__Sunucuda yasaklı olan kişinin yasağını kaldırır.__`
    )

    .addField(
      "📗 | -bansay",
      `__Sunucudaki yasaklı kisilein sayılarını gösterir.__`
    )

    .addField("📗 | -bansor", `__Yasaklı kişinin yasak sebenin gösterir.__`)

    .addField("📗 | -sa-as [aç] [kapat]", `__Sa-As sistemini açıp kapatır.__`)
  
    .addField("📗 | -rol-ver",`__Belirttiğiniz kullanıcıya belirttiğiniz rolü verir.__`)
  
    .addField("📗 | -rol-al",`__Belirttiğiniz kullanıcıdan belirttiğiniz rolü alır.__`)

    .addField("📗 | -mod-log", `__Moderator log sistemini ayarlar.__`)

    .addField("📗 | -oto-rol", `__Oto rol sistemini ayarlar.__`)

    .addField(
      "📗 | -reklamara",
      `__Sunucudaki reklamları tarar. [Yazsanız çalışır ama doğru çalışmaz] [YAKINDA]__`
    )

    .addField(
      "📗 | -reklam-engel [aç] [kapat]",
      `__Reklam engel sistemini açıp kapatır.__`
    )

    .addField(
      "📗 | -küfür-engel [aç] [kapat]",
      `__Küfür engel sistemini açıp kapatır.__`
    )

    .addField(
      "📗 | -everhere-engel [aç] [kapat]",
      `__Ever Here engel sitemini açıp kapatır.__`
    )

    .addField("📗 | -temizle", `__Belirtilen sayıda mesajı siler.__`)

    .addField("📗 | -nuke", `__Beirtilen kanalı siler ve yeniden oluşturur.__`)

    .addField("📗 | -yavaş-mod", `__Belirtilen kanalda yavaş modu açar.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot) | [Destek](https://discord.gg/xnd8cexRkF) "
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["mod"]
};

exports.help = {
  name: "mod",

  description: "Mod Menüsünü Açar",

  usage: "mod"
};
