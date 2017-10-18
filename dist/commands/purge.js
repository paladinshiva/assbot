var client = require("../helpers/client");
var prefix = require("../functions/prefix");
var cfg = require("../../config");

exports.run = client.on("message", (message) => {
    if (message.content.startsWith(cfg.cmd + "purge"))
    // purge;
  //   function purge(message) {
      message.channel.bulkDelete(20);
  // };
    // message.channel.send(purge);
    // if (message.content.startsWith(cfg.cmd + "purge"))
    // return purge;
    // return;
  });
// module.exports = function () {
//       message.channel.send("pong!");
// };
// module.exports = purge;
// exports.run = (client, message, args) => {
//     message.channel.send("pong!").catch(console.error);
// }