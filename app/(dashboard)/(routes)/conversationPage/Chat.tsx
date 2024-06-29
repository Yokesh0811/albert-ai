"use client"

import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/openai",
    });

    const chatContainer = useRef<HTMLDivElement>(null);
    const scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current as HTMLDivElement
        if (scrollHeight >= scrollTop + offsetHeight) {
            chatContainer.current?.scrollTo(0, scrollHeight + 200)
        }
    }

    const renderResponse = () => {
        return (
            <div className="reponseView">
                {messages.map(m => (
                    <div key={m.id} className="whitespace-pre-wrap">
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                        {m.content}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="h-full p-8 flex items-center justify-center">
            {renderResponse()}
            <form onSubmit={handleSubmit} className="space-y-4 w-full h-full flex-col items-center justify-center">
                <input
                    className="w-full px-3 py-4 border bg-transparent border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
                <Button type="submit" className="flex-end">Generate</Button>
            </form>
        </div>
    );
}

export default Chat;

