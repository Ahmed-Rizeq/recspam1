const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523568446034935840")
setInterval(function() {
channel.send(`منورين السيرفر`);
}, 30)
})

client.login(NTEwODMyNTY2OTUwMDM1NDU2.DtbvfA.9qQSxD6bRKxOiz0ClTZkCBTSxzA);
