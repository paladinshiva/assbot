// import { User, ClientUser, GuildMember, Client } from 'discord.js';

/*jshint esversion: 6 */
//...TOC...//
//..IMPORTS..//
//Config file import
//Discord.js import
//fs import
//..ATTACHING OBJECTS..//
//Attaching variable client to object Discord
//..EXEC FUNCTIONS..//
//Login to the registered Discord server
//Message on successfull launch
//..SAMPLE TEXT..//
// -------

//..REQUIRED CODE..//
//Making Discord.js module available
var Discord = require('discord.js');
//Declaring use of Config.json file
var config = require('./config.json');
//Attaching variable client to object Discord.
var client = new Discord.Client();

//..EXEC FUNCTIONS..//
//Login to the registered Discord server.
client.login(config.token);

//Message on successfull launch.
client.on('ready',function() {
  console.log("I am ready!");
});

//Define chat command prefix
//Attach emitter to the message
client.on('message',  function(message) {
  //If chat message prefix doesn't equal prefix value in config, retun.
  if (message.content.indexOf(config.prefix) !== 0) return;
  // New variable "arg", which is everything following the prefix.
  var arg = message.content.slice(config.prefix.length).trim().toLowerCase().split(/ +/g);
  if (arg[1] === "welcome"){
    message.channel.send({embed: {
      title: "Platform Assignment",
      image : {
        "url": "http://96.2.136.233/img/hi.jpg"
      }
    }
    });
    message.react("😱");
    message.react("🤔");
    message.react("🙄");
  }
});
client.on('messageReactionAdd', function(member){
  if (!member.bot){
    member.addRole();
  }

}); 