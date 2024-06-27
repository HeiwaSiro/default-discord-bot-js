// path-to\default-discord-bot-js\commands\goto-welcome.js

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('goto-welcome')
        .setDescription('Takes you to the welcome channel'),
    async execute(interaction) {
        const welcomeChannelId = 'YOUR_ACTUAL_WELCOME_CHANNEL_ID'; // Your actual welcome channel ID
        const welcomeChannelLink = `https://discord.com/channels/${interaction.guildId}/${welcomeChannelId}`;

        const reply = await interaction.reply({ 
            content: 'Ready to fly to the Welcome Channel?',
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: 'Go to Welcome Channel',
                            url: welcomeChannelLink
                        }
                    ]
                }
            ],
            ephemeral: true 
        });

        // Delete the interaction reply after 10 seconds
        setTimeout(async () => {
            try {
                await reply.delete();
            } catch (error) {
                console.error('Failed to delete interaction reply:', error);
            }
        }, 10000); // 10000 milliseconds = 10 seconds
    },
};