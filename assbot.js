/*jshint esversion: 6 */
//..TOC..//
// 1)
// 2)

//..IMPORTS..//
//Config file import
var cfg = require("./config");
//Discord.js import
var Discord = require("discord.js");
//fs import
var fs = require("fs");

//..ATTACHING OBJECTS..//
//client from Discord
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
  if (message.content.startsWith(cfg.cmd + "purge"))
    message.channel.bulkDelete(20);
});
//..SAMPLE TEXT..//
// const Discord = require("discord.js");
// const client = new Discord.Client();
// const fs = require("fs");

// const config = require("./config.json");

// // This loop reads the /events/ folder and attaches each event file to the appropriate event.
// fs.readdir("./events/", (err, files) => {
//   if (err) return console.error(err);
//   files.forEach(file => {
//     let eventFunction = require(`./events/${file}`);
//     let eventName = file.split(".")[0];
//     // super-secret recipe to call events with all their proper arguments *after* the `client` var.
//     client.on(eventName, (...args) => eventFunction.run(client, ...args));
//   });
// });

// client.on("message", message => {
//   if (message.author.bot) return;
//   if(message.content.indexOf(config.prefix) !== 0) return;

//   // This is the best way to define args. Trust me.
//   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//   const command = args.shift().toLowerCase();

//   // The list of if/else is replaced with those simple 2 lines:
//   try {
//     let commandFile = require(`./commands/${command}.js`);
//     commandFile.run(client, message, args);
//   } catch (err) {
//     console.error(err);
//   }
// });

// client.login(config.token);