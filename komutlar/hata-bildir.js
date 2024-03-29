const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let type = args.slice(0).join(" ");
  if (type.length < 1) {
    const embed = new Discord.MessageEmbed()

      .setColor("RED")
      .setDescription(
        "Doğru Kullanım : ${prefix}hata-bildir <bulduğunuz hata>"
      );

    return message.channel.send(embed);
  }

  const embed = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setDescription(
      "Botta Bulduğunuz Hata Başarıyla Bildirildi.\nEn Yakın Zamanda Dm üzerinden Cevap Vereceğiz!"
    );

  message.channel.send(embed);

  const embed2 = new Discord.MessageEmbed()

    .setColor("GREEN")

    .setDescription(
      `**${message.author.tag}** Adlı Kullanıcının **Botta Bulduğu Hata ;**`
    )

    .addField(
      `:envelope: **Gönderen Kişinin Bilgileri ;**`,
      `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`
    )
    .addField(":pencil: **Gönderilen Hata/Bug Mesajı**", type)

    .setThumbnail(message.author.avatarURL);

  client.channels.cache.get("787732003855401011").send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hata-bildir", "hatabildir"],
  permLevel: 0
};

exports.help = {
  name: "hata",
  description: "Botta bulduğunuz hatayı belirtilen kanala bildirir.",
  usage: "hata"
};
