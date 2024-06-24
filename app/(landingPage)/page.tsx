import { Button } from "@/components/ui/button";
import Link from "next/link";

const landingPage = () => {
    return (
        <div className="w-full space-x-2 p-4">
            <Link href="/sign-in">
                <Button>
                    Sign-in
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Sign-up
                </Button>
            </Link>
        </div>
    );
}

export default landingPage;