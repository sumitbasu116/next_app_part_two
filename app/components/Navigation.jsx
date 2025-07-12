import Link from "next/link";

export default function Navigation(){

    return(
        <header className="grid grid-cols-2">
            <div>Sumit Logo</div>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/users">Home</Link>
                </li>
                <li>
                    <Link href="/users/about">About</Link>
                </li>
                <li>
                    <Link href="/users/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/users/service">Service</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
};