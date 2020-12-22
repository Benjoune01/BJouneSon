const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let codework = args.slice(0).join("+");
  if (!codework) return message.channel.send("**Lütfen Bişey Yaz**");
  let link =
    "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text=" +
    codework;
  const pixelien = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
  message.channel.send(pixelien);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cool", "coollogo"],
  kategori: "logolar",
  permLevel: 0
};
exports.help = {
  name: "cool-logo",
  description: "Logo Yaparsınız",
  usage: "logo <yazı>"
};
//Duyur Bu kod tamamen bana aittir
//hayiryav İzinsiz paylaşmak yasak
