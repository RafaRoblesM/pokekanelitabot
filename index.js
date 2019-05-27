const TOKEN = process.env.TELEGRAM_TOKEN || '807546853:AAGbex1UVaHrO9MIvB2t9LHAnWW_iUazYJE';
const TelegramBot = require('../..');
const options = {
  webHook: {
    port: process.env.PORT
  }
};
const url = process.env.APP_URL || 'https://pokekanelitabot.herokuapp.com';
const bot = new TelegramBot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});