const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-373454261911-382395365605-IUwpIHXTCRW5488P5Qdh0puY',
    'name': 'translate'
});

//start Handler
bot.on('start', ()=>{
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel(
        'general', 
        'Let\'s translate from English to Luganda',
        params
    );
});

bot.on('error', (err) => console.log(err));

bot.on('message', data => {
    if(data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

function handleMessage(message) {
  if (message.includes(' please')) {
    translateWord();
  }
}

function translateWord() {
    const word = "bambi";
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel( 'general', `Please = ${word}`, params );
}