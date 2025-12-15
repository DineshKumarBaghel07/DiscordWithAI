import messageDescision from './messageDescision.js';

async function messageListner(client) {
    client.on('messageCreate', async (message) => {

        if (message.author.bot) return;
        
        const messageData = {
            content: message.content,
            authorId: message.author.id,
            channel: message.channel,
            replyTo: message
        }
        try {
            await messageDescision(messageData);
        }
        catch (error) {
            console.error("coming some error in messagelistner" + error);
        }

    });


}

export default messageListner;