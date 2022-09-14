module.exports = {
    data: {
        name: `sub-yt`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://youtube.com/c/comzishere/`,
            ephemeral: true
        });
    }
}