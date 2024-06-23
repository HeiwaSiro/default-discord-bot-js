// path-to\default-discord-bot-js\config\config.js

require('dotenv').config();

module.exports = {
    token: process.env.DISCORD_BOT_TOKEN,
    clientId: process.env.DISCORD_CLIENT_ID,
    guildId: process.env.DISCORD_GUILD_ID,
};
