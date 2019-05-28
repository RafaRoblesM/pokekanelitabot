const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE';
const bot = new TelegramBot(TOKEN,{polling: true})
const request = require('request')
const url ='https://pokekanelitabot.herokuapp.com';

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
    var Busca = "hola";
    var firstnameuser = msg.from.first_name;
    if(msg.text.toString().toLowerCase().includes(Busca)){
      bot.sendMessage(msg.chat.id, "T revientoh mamonah " )
    }
  });
  bot.on('message', function(msg){
    var Busca = "mierda";
    var firstnameuser = msg.from.first_name;
    if(msg.text.toString().toLowerCase().includes(Busca)){
      bot.sendMessage(msg.chat.id, "Tuh muertoh nanoh " )
    }
  });
  
    bot.setWebHook(`${url}/bot${TOKEN}`);
    bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
}); 