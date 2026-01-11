import {GoogleGenAI} from "@google/genai"
import dotenv from 'dotenv';
dotenv.config();



const client = new GoogleGenAI(
    {
        apiKey: process.env.API_KEY
    }
)


const apiService = async (content) => {
    try {
        const data = JSON.stringify(content);
        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents:data
            
        });
        console.log(` api service console ${response.text}`);
        return response.text;
        
    }
    catch (error) {
        console.error("we are getting some error to contect openAi " + error.message);
        return "Arrr! The seas be rough right now. Try again later.";
    }
}






export default apiService;