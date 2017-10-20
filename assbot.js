/*jshint esversion: 6 */
//...TOC...//
//..IMPORTS..//
//Config file import
//Discord.js import
//fs import
//..ATTACHING OBJECTS..//
//Attaching variable client to object Discord
//Attaching in-chat commands to the variable "command"
//Defining arguments for in-chat commands
//..EXEC FUNCTIONS..//
//Login to the registered Discord server
//Message on successfull launch
//Basic messages delete command
//..SAMPLE TEXT..//
// -------

//..IMPORTS..//
//Config file import
var cfg = require("./config");
//Discord.js import
var Discord = require("discord.js");
//fs import
var fs = require("fs");

//..ATTACHING OBJECTS..//
//Attaching variable client to object Discord
var client = new Discord.Client();

//..EXEC FUNCTIONS..//
//Login to the registered Discord server
client.login(cfg.token);

//Message on successfull launch
client.on("ready", () => {
  console.log("I am ready!");
});

//Basic messages delete command
client.on("message", (message) => {
  if (message.content.startsWith(cfg.prefix + "purge"))
    message.channel.bulkDelete(20);
});