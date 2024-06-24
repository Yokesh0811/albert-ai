"use client"

import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-x py-2 flex-1">
                <Link href="/dashboard">
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;