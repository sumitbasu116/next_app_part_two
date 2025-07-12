import Link from "next/link";

export default function Navigation(){

    return(
        <header>
            <div className="">Sumit Logo</div>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
};