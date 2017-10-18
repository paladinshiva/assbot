const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready to kill!");
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("MzY5OTYyODAxNjA0NTkxNjE2.DMgr0Q.Un1_77ZSJP6PCBik6NtOdbef_uA");