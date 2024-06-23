// path-to\default-discord-bot-js\events\ready.js

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const colors = require('colors');
        console.log(`Logged in as ${client.user.tag}`.green);
    },
};