const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = '6097137983:AAHxgNNtIRV0ixIY4g7s9q6xdF1hlK78ALg';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    var Hi = "hai";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id, "Hello vandana rani kottapalli");
}
  });