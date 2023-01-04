import Link from 'next/link';
import React from 'react';
import { SiBurgerking } from 'react-icons/si';
const Header = () => {
    return (
        <header>
            <div>
                <SiBurgerking />
            </div>
            <nav>
                <Link href='/'>До дому</Link>
                <Link href='/about'>Про нас</Link>
                <Link href='/burgers'>Бургери</Link>
                <Link href='/reviews'>Відгуки</Link>
            </nav>
        </header>
    );
};

export default Header;
