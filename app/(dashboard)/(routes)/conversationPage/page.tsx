"use client";

import { MessageSquare } from "lucide-react";
import { Heading } from "../../../../components/heading";
import Chat from "./Chat";



export default function convopage() {
    return (
        <div>
            <header>
                <Heading title="Conversation" description="Our Most advanced conversation model" icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
            </header>
            <Chat />
        </div>

    )
}
