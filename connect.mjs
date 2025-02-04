import OpenAI from "openai";
import { config } from "dotenv";

config();
const openai = new OpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
});
export default openai;