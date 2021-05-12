module.exports = {
    name: 'ola',
    description: 'ele fala oi',
    execute(message, args){
        message.channel.send('Olá, rapariga.');
    }
}