const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()

      .setColor("RED")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Uyarı", "Bu Komutu Özel Mesajlarda Kullanamazsın!");

    return message.author.send(ozelmesajuyari);
  }

  if (message.channel.type !== "dm") {
    const guild = message.guild.id;

    const sunucubilgi = new Discord.MessageEmbed()

      .setColor("GREEN")

      .setAuthor(message.guild.name, message.guild.iconURL)

      .addField("Sunucu Sahibi", message.guild.owner)
      .addField("Sunucu İsmi", message.guild.name)
      .addField("Sunucu İdsi", message.guild.id)
      .addField("Sunucu Bölgesi", message.guild.region)
      .addField("Oluşturma tarihi:", message.guild.createdAt, true)

      .setThumbnail(message.guild.iconURL);

    return message.channel.send(sunucubilgi);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Kinda Code & Only V12",
  usage: "sunucubilgi"
};
