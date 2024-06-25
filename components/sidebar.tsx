"use client"

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, CodeIcon, MusicIcon, Settings } from "lucide-react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        href: "/conversationPage",
        icon: MessageSquare,
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        href: "/imagegeneration",
        icon: ImageIcon,
        color: "text-pink-500",
    },
    {
        label: "Video Generation",
        href: "/videogeneration",
        icon: VideoIcon,
        color: "text-orange-500",
    },
    {
        label: "Music Generation",
        href: "/musicgeneration",
        icon: MusicIcon,
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        href: "/codegeneration",
        icon: CodeIcon,
        color: "text-green-500",
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings,
    }
];

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div className="w-full space-y-4 py-4 flex flex-col h-full text-white">
            <div className=" px-2 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-8">
                    <div className="relative w-10 h-10 mr-3">
                        <Image fill alt="Logo" src="/ai-saas-logo.png" />
                    </div>
                    <h1 className="font-bold text-3xl">
                        Albert AI
                    </h1>
                </Link>
                <div className="space-y-1 mx-3">
                    {routes.map((route) => (
                        <Link href={route.href} key={route.href} className={cn("text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-md transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
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