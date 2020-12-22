const codework1 = require("discord.js");

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed()

    .setTitle("BJoune Bot Davet") //BOTUNUZUN ADINI GİRİN
    .setDescription(
      "**Botun Davet Linki :** [Davet Et](https://discord.com/api/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot)"
    )
    .setColor("BLACK");

  return message.channel.send(codework);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet"
};
