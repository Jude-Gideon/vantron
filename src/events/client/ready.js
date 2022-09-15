const { ActivityType } = require('discord.js');

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Ready to go! Logged in as ${client.user.tag}!`);
    const options = [
      {
        type: ActivtyType.Watching,
        text: "over COMZ INC!",
        status: "online"
      }
   ]
  },
};
