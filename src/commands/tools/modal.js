const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Returns the a modal."),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId(`fav-color`)
      .setTitle(`Fav Color?`);

    const textInpt = new TextInputBuilder()
      .setCustomId("favColorInput")
      .setLabel(`What is your favorite color?`)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInpt));

    await interaction.showModal(modal);
  },
};
