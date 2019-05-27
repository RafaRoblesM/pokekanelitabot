const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE';
const bot = new TelegramBot(TOKEN,{polling: true})

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; 
    bot.sendMessage(chatId, resp);
  });
  const url= 'https://pokekanelitabot.herokuapp.com';
  bot.setWebHook(`${url}/bot${TOKEN}`);
  bot.on('message', function onMessage(msg) {
bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');})