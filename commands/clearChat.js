const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'limpa o chat uai, deleta as mensagens',
  async execute(message, args) {
   
        if(!args[0]) return message.reply('Insira a quantidade de mensagens que a senhorita gostaria de deletar.');
        if(isNaN(args[0])) return message.reply('Eu disse NÚMERO, jamanta.');

        if(args[0] > 100) return message.reply('Desculpa senhora, o discord não me deixa deletar mais que 100 mensagens.');
        if(args[0] < 1) return message.reply('Minha senhora, não tem como deletar NADA (??) oush, faz nem sentido isso ai');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            return message.reply('Mensagens deletadas, querida.')
        })
    }
}
