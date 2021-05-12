const { weatherAPI } = require('../config.json');
const Discord = require('discord.js')

const fetch = require('node-fetch');

module.exports = {
  name: 'weather',
  description: 'temperatura balblabla ',
  async execute(message, args) {
    console.log(`args: ${args}`);
    console.log(`message: ${message}`);
    if (!args.length) {
      return message.channel.send('Você precisa digitar o nome da cidade!');
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${args}&appid=${weatherAPI}&units=metric&lang=pt_br`
    )
      .then((r) => r.json())
      .then((json) => {
        console.log(json);

        message.channel.send(json.weather[0].description);
        message.channel.send(json.main.temp);
        message.channel.send(json.main.feels_like);
        message.channel.send(json.sys.country);
        message.channel.send(json.name)
      });
  },
};