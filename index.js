const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE';
const bot = new TelegramBot(TOKEN,{polling: true})
const weather = require('weather-js');


bot.onText(/^\!botones/, function(msg){
  var chatId =  msg.chat.id;
  var botones = {
    reply_markup:{
      inline_keyboard:[
        [
          {text: "boton 1", callback_data: 'boton1'}
        ]
      ]
    }};

  bot.sendMessage(chatId, "aqui pongp el boton", botones)
  
  bot.on('callback_query', function onCallbackQuery(accionboton) {
    const data = accionboton.data
  
    if (data == 'boton1'){
      bot.answerCallbackQuery({
        callback_query_id: accionboton.id,
        text : 'Accion 1',
        show_alert: true
      })
    }
})})
bot.onText(/^\/clima (.+)/, function(msg, match){
    var chatId = msg.chat.id;
    var ciudad = match[1];

    var opciones = {
        search: ciudad, 
        degreeType: 'C', 
        lang: 'es-ES' 
    }

    weather.find(opciones, function(err, result){

        if (err){ 
            console.log(err);

        } else {
            console.log(result[0]);
            
            bot.sendMessage(chatId, "Lugar: " + result[0].location.name +
            "\n\nTemperatura: " + result[0].current.temperature + "ºC\n" +
            "Visibilidad: " + result[0].current.skytext + "\n" +
            "Humedad: " + result[0].current.humidity + "%\n" +
            "Dirección del viento: " + result[0].current.winddisplay + "\n"
            ,{parse_mode: 'Markdown'});

        }
    })
});


// AIzaSyA38NOyG7wAifJwjEoyJ47XHI7zYNgD91c