import { Client, Events, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
import messageListner from'./messageListner.js';


messageListner(client);


// Enter your Token of bot
client.login(process.env.TOKEN);