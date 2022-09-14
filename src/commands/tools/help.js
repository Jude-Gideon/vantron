const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Returns a embed containing all of my commands!"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`**__Help__**`)
            .setDescription(`**My current commands are:** \n/help \n/embed \n/button \n/modal \n/menu \n/ping `)
            .setColor(0x850101)
            .setTimestamp(Date.now());

            await interaction.reply({
                embeds: [embed]
            });
    },
};
