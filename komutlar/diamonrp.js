const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed();

  embed.setColor("RANDOM");
  embed.setDescription(
    "[Diamond Rp Sınırsız Link](https://discord.gg/xnd8cexRkF)"
  );

  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["diamondrp"],
  permLevel: 0
};

exports.help = {
  name: "diamondrp"
};
