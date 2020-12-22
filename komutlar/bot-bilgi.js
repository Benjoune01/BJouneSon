const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setFooter("BJouneBot", bot.user.avatarURL)
    .addField("» **Botun Sahibi**", "<@576326112175587338>")
    .addField(
      "» **Geliştirici** ",
      "<@325758604512591872> ve <@685834681610141773>"
    )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("» **Çalışma süresi**", seksizaman)
    .addField(
      "» **Kullanıcılar**",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField(
      "**» Bot Davet**",
      " [Davet Et](https://discord.com/oauth2/authorize?client_id=787776903612334101&permissions=8&scope=bot)"
    )
    .addField(
      "**» Destek Sunucusu**",
      " [Sunucumuza Katıl](https://discord.gg/xnd8cexRkF)"
    );

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi", "botbilgi", "i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Kinda Code & Only V12",
  usage: "istatistik"
};
