const SlackBot = require("slackbots");
const axios = require("axios");

//Channel to use
const channel = "translateapp";

const bot = new SlackBot({
  token: "xoxb-373454261911-382395365605-",
  name: "translate"
});

/**
 * Error Alert
 */
bot.on("error", err => console.log(err));

bot.on("message", data => {
  if (data.type !== "message") {
    return;
  }

  handleMessage(data.text);
});

function handleMessage(message) {
  axios
    .get(
      "https://raw.githubusercontent.com/WPLuganda/slackdictionary/master/words.json"
    )
    .then(res => {
      const words = res.data;
      for (key in words) {
        if (message.includes(" " + key)) {
          const params = {
            icon_emoji: ":smiley:"
          };

          bot.postMessageToChannel(channel, `${key} = ${words[key]}`, params);
        }
      }
    });
}

//start Handler
// bot.on("start", () => {
//   const params = {
//     icon_emoji: ":smiley:"
//   };

//   bot.postMessageToChannel(
//     channel,
//     "Type @translate leave a space and the desired word then return to translate from English to Luganda.",
//     params
//   );
// });
