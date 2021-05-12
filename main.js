const Discord = require('discord.js');
const {prefix, token } = require('./config.json');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('funciono carai!');
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Alguma coisa deu erradona hora de executar o comando, faz denovo, faz direito.')
    }
});

client.login(token);