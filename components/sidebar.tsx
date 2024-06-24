"use client"

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, CodeIcon, MusicIcon, Settings } from "lucide-react"
import { cn } from "@/lib/utils";

const Sidebar = () => {

    const routes = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            color: "text-sky-500",
            bgColor: "text-sky-500/10"
        },
        {
            label: "Conversation",
            href: "/conversationPage",
            icon: MessageSquare,
            color: "text-violet-500",
            bgColor: "text-violet-500/10"
        },
        {
            label: "Image Generation",
            href: "/imagegeneration",
            icon: ImageIcon,
            color: "text-pink-500",
            bgColor: "text-pink-500/10"
        },
        {
            label: "Video Generation",
            href: "/videogeneration",
            icon: VideoIcon,
            color: "text-orange-500",
            bgColor: "text-orange-500/10"
        },
        {
            label: "Music Generation",
            href: "/musicgeneration",
            icon: MusicIcon,
            color: "text-emerald-500",
            bgColor: "text-emeral-500/10"
        },
        {
            label: "Code Generation",
            href: "/codegeneration",
            icon: CodeIcon,
            color: "text-green-500",
            bgColor: "text-green-500/10"
        },
        {
            label: "Settings",
            href: "/settings",
            icon: Settings,
        }
    ];

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-x py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-9 h-9 mr-3">
                        <Image fill alt="Logo" src="/ai-saas-logo.png" />
                    </div>
                    <h1 className="font-bold text-2xl">
                        Albert AI
                    </h1>
                </Link>
                <div className="space-y-1 ml-2">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href} className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-md transition">
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;