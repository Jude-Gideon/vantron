const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
data: new SlashCommandBuilder()
.setName("meme")
.setDescription("Returns an meme."),
  async execute(interaction, client) {
    try {
      const url = await fetch("https://www.reddit.com/r/memes/random/.json");
      const random = await url.json();

      const embed = new EmbedBuilder()
        .setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
        .setImage(random[0].data.children[0].data.url)
        .setColor("#FF00A6");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};