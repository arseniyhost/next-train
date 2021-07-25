import Link from "next/link";

export default function Error() {
    return (
        <div>
            <h1>My Custom Page with  ERROR</h1>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    )
}