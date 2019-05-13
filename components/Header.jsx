import Link from 'next/link';

export const Header = () => (
    <header>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
        </ul>
    </header>
);