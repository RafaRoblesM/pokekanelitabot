const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot('807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE',{polling: true})
const request = require('request')

bot.onText(/^\start/, function(msg){
  console.log(msg)
  var chatId = msg.chat.id;
  var username = msg.form.username;

  bot.sendMessage(chatId, "Hola, " + username + " soy el pokebot y me llamo PokekanelitaBot")
});

bot.on('message', function(msg){
  var Hola = "hola bot";
  var firstnameuser = msg.from.first_name;
  if(msg.text.toString().toLowerCase().includes(Hola)){
    bot.sendMessage(msg.chat.id, "Hola " + firstnameuser )
  }
})