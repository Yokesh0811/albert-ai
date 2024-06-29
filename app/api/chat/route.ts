// import OpenAI from "openai";
// import { streamText, StreamingTextResponse } from "ai";

// export const maxDuration = 30;

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY || ' ',
// });

// export async function POST(req: Request, res: Response) {
//     const { messages } = await req.json();
//     console.log('messages:', messages)

//     const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {
//                 role: "system",
//                 content: "You a called Albert one of the friendliest ai, you address people in a friendly way"
//                     + "you often likes to crack jokes"
//                     + "You go straight to the point, your replies are under 250 characters."
//             },
//             ...messages,
//         ],
//         temperature: 1,
//     });

//     const stream = await streamText(response);
//     return new StreamingTextResponse(stream as unknown as ReadableStream);
// }

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
    const { messages } = await req.json();
    const result = await streamText({
        model: openai("gpt-4-1106-preview"),
        messages,
    });
    return result.toAIStreamResponse();
}
