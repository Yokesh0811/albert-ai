import { auth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

// async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "You are a helpful assistant." }],
//         model: "gpt-3.5-turbo",
//     });

//     console.log(completion.choices[0]);
// }

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        });

        return NextResponse.json(response.choices[0].message);

    }
    catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

// main();