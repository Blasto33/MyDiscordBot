const Discord = require('discord.js')
const client = new Discord.Client()
const { token, server_name, server_port } = require("./auth.json")
var stats = require("./stats.js")
var server_status = require("./server.js")
var video = require("./video.js")
var help = require("./help.js")

client.login(token)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  var word = "vidéo";
  var sentence = msg.content;
  var cmd = msg.content;

  if (msg.author.bot) //Prevents the bot from looping by itself
      return;
  switch (cmd) {
      case '!help':
        help.display_help()
        return;
      case '!video':
        video.display_infos_last_video()
      case '!stats':
        stats.display_server_stats()
      case '!server':
        server_status.display_minecraft_server_status(msg)
  }
})
