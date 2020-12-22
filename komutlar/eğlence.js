const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("BLACK")

    .setTitle("BJouneBot Eğlence Menüsü")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📘 | -trump", `__Yazdığınız yazıyı Trump'ın tweetine çevirir.__`)

    .addField(
      "📘 | -avatar",
      `__Sizin veya etiketlediğiniz kişinin profil fotoğrafını gösterir.__`
    )

    .addField(
      "📘 | -resim-yap",
      `__BJouneBot sizin için bir tane resim yapar.__`
    )

    .addField("📘 | -fbi", `__Fbi open the door.__`)
  
    .addField("📘 | -stres-çarkı",`__Stres çarkı çevirirsin.__`)
  
    .addField("📘 | -taksim",`__Taksim dayı.__`)
  
    .addField("📘 | -zeki",`__Zeki olursun.__`)
  
    .addField("📘 | -söv",`__Söver.__`)
  
    .addField("📘 | -cool",`__Cool logo yapar__`)
  
    .addField("📘 | -neonmavi",`__Neon mavi yazı yazar.__`)
  
    .addField("📘 | -soygun-yap",`__Abd doları soyarsınız.__`)
  
    .addField("📘 | -espri",`__Espri yapar.__`)
  
    .addField("📘 | -vine",`__Rastgele bir vine atar.__`)
  
    .addField("📘 | -tekerleme",`__Rastgele bir tekerleme söyler.__`)

    .addField("📘 | -say", `__Sunucudaki kişileri sayar.__`)

    .addField("📘 | -g-say", `__Sunucuda gelişmiş sayım yapar.__`)
  
    .addField("📘 | -anime",`__İstediğiniz animeyi aratıp bilgilerine ulaşabilirsiniz.__`)
  
    .addField("📘 | -film-öner",`__Kendi yaptığım listeden bir film gösterir.__`)
  
    .addField("📘 | -miim",`__Rastgele bir miim gösterir.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot) | [Destek](https://discord.gg/xnd8cexRkF) "
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["eğlence"]
};

exports.help = {
  name: "eğlence",

  description: "Eğlence Menüsünü Açar",

  usage: "eğlence"
};
