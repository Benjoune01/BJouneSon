const Discord = require('discord.js');
exports.run = async (client, message) => {
  var karakterler = [
    "Civocik [Civciv olan]",
    "Nimet kapak resmindeki ayçiceği",
    "Göte şaplak atan Spiderman",
    "❤ MUSTAFA KEMAL ATATÜRK ❤",
    "Dans eden kurt [Yaşasın ırkımız :)]",
    "Trump",
    "Tiktokcu Buse Korkmaz",
    "Veletler",
    "Galaksiyi söyleyen kadın",
    "Kadir Yanık [Kral Olan]",
    "Elraenn",
    "Dj dikkat",
    "Feyzullah",
    "Ruhi Köni [Pezeveng olan]",
    "Filozof Atakan",
    "Köksal baba",
    "Aykut Elmas",
    "Cüce reis",
    "Taksim dayı",
    "Hakan Özbek[Adam Olmayan]",
    "Abbas Yanbasan",
    "Eren Çam [Orospu olan]",
    "Weide Ege [Orspu çocu olan]",
    "Kuzey Tekinoğlu",
    "Cihangir kennedy",
    "Laiklik elden gidiyeah dede"
   
    ]  
  var karakterler = karakterler[Math.floor(Math.random(1) * karakterler.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username} ın Kutusu;`, message.author.avatarURL())
    .setDescription(`
\`\`\`
Kutudan Çıkan Karakter = ${karakterler}
\`\`\`
`)
  .setFooter(`Kutuyu açan (${message.author.username}) Hayırlı olsun karrşiim`)
    message.channel.send(embed);
  }
 
 
exports.conf = {
  aliases: ['jsal']
}
exports.help = {
  name: "kutuaç"
}