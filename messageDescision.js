import dispatcher from './dispatcher.js';
import apiService from './apiService.js';


async function messageDescision(messageData) {

    const { content } = messageData;
    if (!content.startsWith('!ai')) return;
    let validMessage = content.replace('!ai', "").trim();
    if (!validMessage) {
        dispatcher(messageData, "Please ask me some question after !ai");
    }

    try {
        const response = await apiService(validMessage)
        await dispatcher(messageData, response);

    }
    catch (error) {
        console.error("error come  in messsageDecission file " + error);
        await dispatcher(messageData, 'sorry somthings went wrong while proccesing your request')
    }

}

export default messageDescision;