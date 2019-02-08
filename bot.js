const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543466493086793729")
setInterval(function() {
channel.send(`كريديت`);
}, 30)
})

client.login("NTE0NzQxNjE0NDM5MDM4OTc2.Dz89fg.GJgzjkDZlSlJdgTr-UUeLWa-h8k");
