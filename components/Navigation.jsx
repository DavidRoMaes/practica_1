import Link from 'next/link';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/users">Lista de usuarios</Link>
                </li>
                <li>
                    <Link href="/users/1">Usuario id=1</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;