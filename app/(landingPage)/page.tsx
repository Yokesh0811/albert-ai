import { Button } from "@/components/ui/button";
import Link from "next/link";

const landingPage = () => {
    return (
        <div>
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