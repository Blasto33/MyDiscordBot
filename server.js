const { token, server_name, server_port } = require("./auth.json")
var mcping = require('mc-ping');

module.exports = {
    display_minecraft_server_status: function(msg) {
        mcping(server_name, server_port, function(err, res) {
        if (err) {
          msg.reply("Le serveur est offline pour le moment !")
        } else {
          console.log(res.num_players)
          if (res.num_players <=1)
            msg.reply("le serveur est online avec " + res.num_players + " joueur connecté !")
          else
            msg.reply("le serveur est online avec " + res.num_players + " joueurs connectés !")
        }
      }, 3000);
    }
};
