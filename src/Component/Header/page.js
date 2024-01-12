'use client'

import { usePathname } from 'next/navigation'
import "./Header.scss";
import SVG_ICONS from '@/constants/icons';
import Link from 'next/link';
import React from 'react';
import { NavLinks } from '@/constants';
import Button from '../Button/Page';
import { useRouter } from 'next/navigation';
import { URLS } from '@/routes/URLS';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter()

    const ActiveLink = (props) => {
        let { url, label, isImage } = props;
        let isActive = pathname === url;
        return <li className={isImage ? "link" : isActive ? "link active" : "link"} >
            <Link href={url}>
                {label}
            </Link>
        </li>
    }

    const handleContactUsClick = () => {
        router.push(URLS.ContactUs);
    }

    return (
        <header>
            <nav className='nav-bar'>
                <div className="nav-links">
                    <ul>
                        <Link className="logo" href={"/"}>
                            <i className='logo-icon'>{SVG_ICONS.LogoSVGIcon}</i>
                        </Link>
                        {NavLinks?.map((link, index) => {
                            return <ActiveLink key={index} {...link} />
                        })}
                        <Button
                            text={"Contact Us"}
                            onClick={handleContactUsClick}
                            variant='primary'
                            icon={SVG_ICONS.RightArrow}
                        />
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header