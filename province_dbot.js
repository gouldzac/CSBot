const { Client, Intents } = require('discord.js');

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Define your command prefix
const prefix = '!';

// Event handler when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Event handler for messages
client.on('messageCreate', (message) => {
    // Ignore messages from bots and messages that don't start with the prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'testtext') {
        // Replace this with your desired test message
        const testMessage = 'This is a test message for the testtext command!';
        message.reply(testMessage);
    }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('MTE1NjQxMjY2ODIzMjU5NzUwNA.GQ0iva.kkCjzkk6oCSBSYcN8DBDVA6ZSpumI-bfYmeJJU');