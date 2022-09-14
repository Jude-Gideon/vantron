const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Returns an embed."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is a shitty embed I spent five minutes on!`)
            .setDescription(`Guess what? Chicken Cancer.`)
            .setColor(0x850101)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now());

            await interaction.reply({
                embeds: [embed]
            });
    },
};
