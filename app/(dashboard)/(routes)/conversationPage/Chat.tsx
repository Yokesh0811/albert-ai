"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
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
                {messages.map((m, index) => (
                    <div key={m.id} className={`chat-line ${m.role === 'user' ? 'user-chat' : 'ai-chat'}`}>
                        <Image className="w-8 h-8 rounded-full" alt="avatar" src={m.role === 'user' ? 'user-avatar.jpg' : 'ai-avatar.jpg'} />
                        <div className="w-full ml-4">
                            <p className="message">{m.content}</p>
                            {index < messages.length - 1 && <div className="horizontal-line" />}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="h-full flex items-center justify-center">
            {renderResponse()}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your message here..." />
                <Button type="submit">Generate</Button>
            </form>
        </div>
    );
}

export default Chat;

