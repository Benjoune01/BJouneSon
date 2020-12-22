const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const nameles = new Discord.MessageEmbed()

    .setColor("GREEN")

    .setTitle("BJouneBot Gif Menüsü")
  
    .setThumbnail("https://cdn.discordapp.com/attachments/784753786395557908/789448303749627914/diamond.gif")

    .addField("📔 | -gif-animal", `__Rastgele bir hayvan gifi atar.__`)

    .addField("📔 | -gif-anime", `__Rastgele bir anime gifi atar.__`)

    .addField("📔 | -gif-baby", `__Rastgele bir bebek gifi atar.__`)
  
    .addField("📔 | -gif-couple",`__Rastgele bir sevgili gifi atar.__`)
  
    .addField("📔 | -gif-man",`__Rastgele bir erkek gifi atar.__`)
  
    .addField("📔 | -gif-woman",`__Rastgele bir kız gifi atar.__`)
  
    .addField("📔 | -gif-ara",`__Yazdığınız kelime ile ilgili gif arar.__`)

    .setDescription(
      "[Ekle](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot) | [Destek](https://discord.gg/xnd8cexRkF) "
    );

  message.channel.send(nameles);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["gif"]
};

exports.help = {
  name: "gif",

  description: "Yardım Menüsünü Açar",

  usage: "gif"
};
