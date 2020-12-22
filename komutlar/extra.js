const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("BLUE")

    .setTitle("BJouneBot Extra Menüsü")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📙 | -istatistik", `__Botun istatistiklerini gösterir__`)

    .addField("📙 | -davet", `__Botun davet linkini gösterir__`)

    .addField("📙 | -sunucupp", `__Sunucunuzun resmini gösterir.__`)

    .addField("📙 | -afk", `__Afk olursunuz.__`)

    .addField("📙 | -atam", `__Atamın müthiş fotoğraflarını atar.__`)

    .addField("📙 | -zarat", `__Zar atarsın.__`)

    .addField(
      "📙 | -canlıdestek",
      `__Canlı destek komudu kullandığınız andan itibaren en kısa zamanda ulaşırım.__`
    )

    .addField("📙 | -oylama", `__Oylama yapmanızı sağlar.__`)

    .addField("📙 | -çeviri", `__Yazdığınız metni çevirir.__`)

    .addField("📙 | -hata-bildir", `__Botta br hata varsa bildirir.__`)

    .addField("📙 | -istek-bildir", `__İsteğinizi bize bildirir.__`)

    .addField(
      "📙 | -kullanıcı-bilgi",
      `__Kendinizin veya etiketlediğiniz kişinin bilgilerini gösterir.__`
    )

    .addField(
      "📙 | -rol-bilgi",
      `__Etiketlediğiniz rolün bilgilerini gösterir.__`
    )

    .addField("📙 | -ping", `__Botun pingini hesaplar.__`)

    .addField("📙 | -hava", `__Hava durumunu gösterir.__`)

    .addField("📙 | -yapimcim", `__Yakışıklı yapımcıları gösterir.__`)

    .addField("📙 | -yılbaşı", `__Yılbaşına ne kadar kaldığını gösterir.__`)

    .addField("📙 | -yardım", `__Bot ile ilgili yardım alırsınız.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot)"
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["extra"]
};

exports.help = {
  name: "extra",

  description: "Extra Menüsünü Açar",

  usage: "extra"
};
