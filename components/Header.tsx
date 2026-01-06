
'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/dist/client/components/navigation";
import {cn} from "@/lib/utils";
const Header = () => {
    const pathName = usePathname()
    return (
        <header>
            <div className="main-container inner">
            <Link href="/">
                <Image src="/assets/logo.svg" alt="coinpulse logo"
                width={132}
                height={40}
                />
            </Link>
                <nav>
                    <Link href="/" className={cn('nav-link',
                        { active: pathName === '/',
                            'is-home': true})}>Home</Link>
                    <p>Search Modal</p>
                    <Link href="/coins" className={cn('nav-link', { active: pathName === '/coins'})}>All Coins</Link>

                </nav>
            </div>
            </header>
    );
};

export default Header;