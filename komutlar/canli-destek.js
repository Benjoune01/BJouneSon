const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji2 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji3 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji4 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji5 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji6 = message.client.emojis.cache.get(':telephone_receiver:');
const emoji7 = message.client.emojis.cache.get(':telephone_receiver:');
      let isEnabled;
      message.reply("Canlı Destek Komutunu Kullandığınız İçin Teşekkürler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "787830440412315678";
      const embed = new Discord.MessageEmbed()
        .addField('Uyarı', `📞 Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.cache.get(destekKanal).send({
        embed: embed
      });

    const collector = client.channels.cache.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.cache.get(destekKanal).send(':telephone_receiver: Destek çagrısı bağlanmak için `katıl` yazınız. İptal Etmek İçin `kapat` yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply(':telephone_receiver: Çagrı zaman aşımına uğradı.')
      if (reason === 'aborted') {
        message.reply('Çağrı reddedildi.')
        client.channels.cache.get(destekKanal).send(':telephone_receiver: Başarıyla çağrı reddedildi.')
      }
      if (reason === 'success') {
        client.channels.cache.get(destekKanal).send(':telephone_receiver: Destek çagrısı alındı!')
        client.channels.cache.get(destekKanal).send(':telephone_receiver: Destek çağrısını kapatmak için `kapat` yazınız.')
        chan.send(`${message.author}`)
        chan.send('Çağrınız bir destek yetkili tarafından alındı!')
        chan.send('En Yakın Zamanda Size Yardımcı Olacagız.')
        chan.send('Destek çagrısı kapatmak için `kapat` yazınız.')
        isEnabled = true

      client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send(':telephone_receiver: Çağrı Kapatıldı.')
              if (message.channel.id === chan.id) client.channels.cache.get(destekKanal).send(':telephone_receiver: Çağrı karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) chan.send(':telephone_receiver: Çağrı karşı taraftan kapatıldı.')
              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.cache.get(destekKanal).send(`📞 **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`📞 **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};