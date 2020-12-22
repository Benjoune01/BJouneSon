const codework1 = require("discord.js");
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const codework = new codework1.MessageEmbed()
    .setAuthor("")
    .setColor("BLACK")
    .setDescription(
      `** ${mesaj} ` + message.author.username + " FBI Open the door !**"
    )
    .setImage(
      `https://thumbs.gfycat.com/CriminalSilentKingbird-size_restricted.gif `
    )
    .setFooter(`BJouneBot © | Tüm hakları saklıdır.`);
  return message.channel.send(codework);
};
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "fbi",
  description: "CodeWork V12 fbi",
  usage: "Fbi Geldi aç kapıyı"
};

//TEST EDİLDİ
