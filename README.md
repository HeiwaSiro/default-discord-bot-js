# default-discord-bot-js
## Overview
This project is a basic Discord bot built using Node.js and Discord.js. It includes a structured setup for handling events, commands, and deploying slash commands to Discord servers.
### Tech of Project
- ![Node.js](https://img.shields.io/badge/Node.js-v22.3.0-green) - Node.js is a JavaScript runtime.
- ![npm](https://img.shields.io/badge/npm-v10.8.1-red) - npm is the package manager for Node.js.
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) - ES6 version of JavaScript.
- ![VSCode](https://img.shields.io/badge/VSCode-Recommended-lightgrey) - Visual Studio Code or your preferred code editor.
- ![Discord.js](https://img.shields.io/badge/Discord.js-v14.15.3-blue) - Discord.js library for interacting with Discord API.
## Setup
1. Clone the Repository: Clone this repository to your local machine.
```bash
git clone https://github.com/ZukoHeiwa0000/default-discord-bot-js.git
```
2. Install Dependencies: Navigate to the project directory and install dependencies.
```bash
npm install
```
3. Environment Variables: Rename env.example to .env and fill in your Discord bot token, client ID, and guild ID.
```bash
DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_guild_id_here
```
4. Enable Privileged Gateway Intents: In the Discord Developer Portal for your bot:
- Enable the following Gateway Intents under the "Bot" section:
    - Presence Intent
    - Server Members Intent
    - Message Content Intent
- These are required for the bot to function properly based on the provided code.
5. OAuth2 Setup: Generate an OAuth2 URL with the bot scope and select permissions based on your bot's functionality. Use this URL to invite the bot to your preferred Discord server.
## Structure 
- `index.js` Main entry point for the bot, initializes the Discord client and sets up event and command handlers.
- `deploy-commands.js` Script to deploy slash commands to your Discord server.
- `events/ready.js` Event handler for when the bot is ready and logged into Discord.
- `config/config.js` Configuration file that loads environment variables using `dotenv`.
## Running the Bot
Once setup is complete:
```bash
npm run dev
```
This will start the bot and log it in to Discord.
## Additional Notes
- Customize the bot's behavior by modifying or adding command and event files under their respective directories (`commands/` and `events/`).
- Ensure your bot has the necessary permissions on Discord as configured in the OAuth2 URL.
## Contributing
Feel free to fork this repository, create [pull requests](https://github.com/ZukoHeiwa0000/default-discord-bot-js/pulls), or open [issues](https://github.com/ZukoHeiwa0000/default-discord-bot-js/issues) for any improvements or features you'd like to see added.
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
