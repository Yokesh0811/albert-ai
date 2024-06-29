"use client";

import { MessageSquare } from "lucide-react";
import { Heading } from "../../../../components/heading";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";



export default function chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div>
            <header className="mt-4">
                <Heading title="Conversation" description="Our Most advanced conversation model" icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
            </header>
            <div className="h-full p-4 flex items-center justify-center">
                <div className="reponseView">
                    {messages.map((m) => (
                        <div key={m.id} className="whitespace-pre-wrap">
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}
                </div>
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
        </div>

    )
}
