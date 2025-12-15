import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();



const client = new OpenAI(
    {
        apiKey: process.env.API_KEY
    }
)


const apiService = async (userMessage) => {
    try {
        const response = await client.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: "Talk like a pirate."
                },
                {
                    role: 'user',
                    content: userMessage
                }
            ]
        })
        return response.choices[0].message.content;
    }
    catch (error) {
        console.error("we are getting some error to contect openAi " + error.message);
        return "Arrr! The seas be rough right now. Try again later.";
    }
}



export default apiService;