const Discord = require('discord.js');

exports.run = async(client, message) => {

let Pixelien = new Discord.MessageEmbed()
.setColor("#2c2f33")
.addField("**__Gecikme Sürem__**", `**${client.ws.ping}** ms Olarak Hesaplandı.`,true)

message.channel.send(Pixelien)//CodeWork

}//Pixelien

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };
//Duyur V12 Ping komutudur
//hayiryav İzinsiz paylaşmayınız