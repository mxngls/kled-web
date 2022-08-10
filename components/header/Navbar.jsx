import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={"navbar"}>
            <Link href="/wordlist">
                <a className="navbar__link">Word List</a>
            </Link>
            <Link href="/">
                <a className="navbar__link">Home</a>
            </Link>
        </nav>
    );
}
