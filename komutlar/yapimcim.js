const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yapımcım = new Discord.MessageEmbed()

    .setTitle("Yapımcılarım ;")

    .setColor("GREEN")

    .setThumbnail(
      "https://cdn.discordapp.com/attachments/787717906867290132/787786050163441684/1607870026178.jpg"
    )

    .setDescription("ツ『BenJoune』ツ#5239, Ruhi#4238 ve Jedinstven#9417");

  message.channel.send(yapımcım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapimcim"],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yapımcım"
};
