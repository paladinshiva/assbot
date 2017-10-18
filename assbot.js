// var Discord = require("discord.js");
// const client = new Discord.Client();
var client = require("./dist/helpers/client");
var prefix = require("./dist/functions/prefix");
var cfg = require("./config.json");
client.on("ready", () => {
  console.log("I am ready!");
});

client.login(cfg.token);