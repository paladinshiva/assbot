var client = require("../helpers/client");
var cfg = require("../../config");

// module.exports = function prefix() {client.on("message", (message) => {
//   !message.content.startsWith(cfg.cmd); 
//   return;
// })
// };
// Set the prefix
// client.on("message", (message) => {
//   // Exit and stop if it's not there
//   if (!message.content.startsWith(prefix)) return;

//   if (message.content.startsWith(prefix + "ping")) {
//     message.channel.send("pong!");
//   } else
//   if (message.content.startsWith(prefix + "foo")) {
//     message.channel.send("bar!");
//   }
// });
// module.exports = prefix;