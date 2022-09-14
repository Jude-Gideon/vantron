module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Currently logged in as ${client.user.tag} and ready to go!`);
  },
};
