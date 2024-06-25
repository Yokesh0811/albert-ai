import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, CodeIcon, MusicIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const dashboard = () => {

    const tools = [
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
    ]
    return (
        <div>
            <div className="space-y-3 mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-2">
                {tools.map((tool) => (
                    <Card key={tool.href} className="px-4 py-3 border-slate/5 flex items-center justify-between hover:bg-black/5 cursor-pointer transition">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="mr-3" />

                    </Card>
                ))}

            </div>
        </div>

    );
}

export default dashboard;