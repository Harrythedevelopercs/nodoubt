"use client"
import Link from 'next/link'
import styles from "@/styles/layout/navigation.module.scss"
import IMGbg from "media/menuImage.webp"
import Image from 'next/image'
import { ClosedIcon, NavIcon, SubMenuIcon } from '@/src/app/app-constants'
import { useState } from 'react';

const Navigation = ({ scrolled, isLight }) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };
    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'} ${isLight ? "" : 'isLight'}  ${scrolled ? "activeScroll" : ''}`}>
                {isActive ? <ClosedIcon /> : <NavIcon />}
            </div>
            <ul className={`${styles.menuSection} ${isActive ? styles.activeMenu : ''} ${scrolled ? styles.active : ''} ${isLight ? "" : styles.isLight}`} >
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="#">Services</Link>
                    <div className={styles.subMenu}>
                        <div className={styles.subMenuContainer}>
                            <div className={styles.subMenuImage}>
                                <Image src={IMGbg.src} alt="Talk To Us Today" fill />
                            </div>
                            <div className={styles.subMenuItems}>
                                <div className={styles.titleSubMenu}>Services</div>
                                <ul>
                                    <li><Link href="/book-writing-services"><SubMenuIcon />Book Writing</Link></li>
                                    <li><Link href="/book-trailer-services"><SubMenuIcon />Book Video Trailer</Link></li>
                                    <li><Link href="/book-editing-services"><SubMenuIcon />Book Editing</Link></li>
                                    <li><Link href="/audiobook-recording-services"><SubMenuIcon />Audio Book</Link></li>
                                    <li><Link href="/book-publishing-services"><SubMenuIcon />Book Publishing</Link></li>
                                    <li><Link href="/book-cover-design-services"><SubMenuIcon />Book Cover Design</Link></li>
                                    <li><Link href="/book-marketing-services"><SubMenuIcon />Book Marketing</Link></li>
                                    <li><Link href="/author-website-design-services"><SubMenuIcon />Author Website</Link></li>
                                    <li><Link href="/children-book-publication-services"><SubMenuIcon />Children Book Publication</Link></li>
                                    <li><Link href="/book-proofreading-services"><SubMenuIcon />Proofreading</Link></li>
                                    <li><Link href="/children-book-illustrator"><SubMenuIcon />Children Book Illustration</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </>
    )
}

export default Navigation