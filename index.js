const SlackBot = require('slackbots')
const axios = require('axios')

const words = {
    please: 'bambi',
    no: 'nedda'
}

const bot = new SlackBot({
    token: 'xoxb-373454261911-382395365605-IUwpIHXTCRW5488P5Qdh0puY',
    'name': 'translate'
});

const channel = 'translateapp'

//start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel(
        channel,
        'Type @translate leave a space and the desired word then return to translate from English to Luganda.',
        params
    )
})

bot.on('error', (err) => console.log(err))

bot.on('message', data => {
    if (data.type !== 'message') {
        return
    }

    // Issue is now here. How to run this evertime a new word is called.
    handleMessage(data.text)
});

for (key in words){
    function handleMessage(message) {
        if (message.includes(' ' + key)) {
            translateWord()
        }
    }
    
    function translateWord() {
        const params = {
            icon_emoji: ':smiley:'
        }
    
        bot.postMessageToChannel(channel, `${key} = ${words[key]}`, params);
    }
}
