const Discord = require("discord.js");

module.exports = {
  name: "embed",
  description: "aprendendo a usar embed",
  execute(message, args) {
      
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#e8bcd6')
	.setTitle('Olá Putas')
    .setAuthor('Call me by your name', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1015px-Full_Moon_Luc_Viatour.jpg')
    .setDescription('q q isso faz?')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1015px-Full_Moon_Luc_Viatour.jpg')
    .addFields(
		{ name: '1', value: 'descrição do 1?' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1015px-Full_Moon_Luc_Viatour.jpg')
    .setFooter('q isso', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1015px-Full_Moon_Luc_Viatour.jpg');

    message.channel.send(exampleEmbed);
  },
};
