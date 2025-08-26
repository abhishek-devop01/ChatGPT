// Import the Pinecone library
import { PINECONE_API_KEY } from '../../node_modules/@pinecone-database/pinecone/dist/pinecone.d';
const { Pinecone } =require('@pinecone-database/pinecone')

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const gptIndex = pc.Index('gpt');

async function createMemory({vectors, metadata}){
     await gptIndex.upsert([{
          id:messageId,
          values:vectors,
          metadata
     }])
}