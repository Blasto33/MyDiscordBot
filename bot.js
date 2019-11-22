const Discord = require('discord.js')
const client = new Discord.Client()
const { token } = require("./auth.json")
var stats = require("./stats.js")

client.login(token)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  var splitted_msg = msg.content.split(" ");
  var word = "vidéo"
  var sentence = msg.content;

  console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
  var hello = stats.print_hello();
  //console.log(splitted_msg.length);
  /*for (i = 0; i < splitted_msg.length; i++) {
    msg.reply(splitted_msg[i]);
  } */
  /*if (msg.content === 'ping') {
    msg.reply('Pong!')
  } */
})
