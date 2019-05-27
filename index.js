const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TELEGRAM_TOKEN || '807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE';
const bot = new TelegramBot(TOKEN,{polling: true})
const request = require('request')

bot.onText(/^\/start/, function(msg){
  console.log(msg)
  var chatId = msg.chat.id;
  var username = msg.form.username;

  bot.sendMessage(chatId, "Hola, " + username + " soy el pokebot y me llamo PokekanelitaBot")
});

bot.on('message', function(msg){
  var Hola = "hola bot";
  var firstnameuser = msg.from.first_name;
  if(msg.text.toString().toLowerCase().includes(Hola)){
    bot.sendMessage(msg.chat.id, "Hola pokemaniaco " + firstnameuser )
  }
});
bot.on('message', function(msg){
    var Busca = "buscame";
    var firstnameuser = msg.from.first_name;
    if(msg.text.toString().toLowerCase().includes(Busca)){
      bot.sendMessage(msg.chat.id, "Hola pokemaniaco " + firstnameuser )
    }
  });
  const url = process.env.APP_URL || 'https://pokekanelitabot.herokuapp.com';
    bot.setWebHook(`${url}/bot${TOKEN}`);
    bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});