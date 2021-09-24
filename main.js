import Discord from 'discord.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const client = new Discord.Client();

const prefix = '-';

import fs from 'fs';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.cjs'));
for (const file of commandFiles){
     const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('TestBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'role'){
        client.commands.get('role').execute(message, args);
    } else if (command == 'embed'){
        client.commands.get('embeds').execute(message, args, Discord);    
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'tangerine'){
        client.commands.get('tangerine').execute(message, args);
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }
});

client.login('ODY0MTcyODUwNzA4MzQ4OTI4.YOxlrw.PsmJUZliin1gkxjkVXztgO67rTI');