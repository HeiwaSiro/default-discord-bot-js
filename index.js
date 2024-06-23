// path-to\default-discord-bot-js\index.js

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { token } = require('./config/config');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,         // For basic server info
    GatewayIntentBits.GuildMembers,   // For server member info (requires privileged intent)
    GatewayIntentBits.GuildMessages,  // For reading messages in servers
    GatewayIntentBits.GuildMessageReactions,  // For reading message reactions 
    GatewayIntentBits.GuildVoiceStates,  // For voice channel info (joining/leaving/states) 
    GatewayIntentBits.GuildPresences, // For member presence info (online/offline/status) (privileged intent)
    GatewayIntentBits.GuildMessageTyping,  // For detecting when users are typing
    GatewayIntentBits.DirectMessages,     // For reading and sending direct messages
    GatewayIntentBits.DirectMessageReactions,  // For reading direct message reactions
    GatewayIntentBits.DirectMessageTyping, // For detecting typing in direct messages
    GatewayIntentBits.MessageContent       // For reading message content (privileged intent) 
  ] });

// Event handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(path.join(eventsPath, file));
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Command handler
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error executing that command!', ephemeral: true });
    }
});

client.login(token);
