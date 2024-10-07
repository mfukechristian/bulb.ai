import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
dotenv.config();

const parser = new StringOutputParser();

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "mixtral-8x7b-32768",
  temperature: 0,
});

const promptTemplate = PromptTemplate.fromTemplate(" {topic}");

const result = await model.invoke("give me a new bussiness idea in 30 words?");

console.log(await parser.invoke(result));
