"use client"
import { MainLogo } from "@/src/app/app-constants"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/header.module.scss"
import Navigation from "@/src/app/layout/navigation"
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isLight, setIsLight] = useState(true);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    // useEffect(() => {
    //     setIsLight(pathname === '/');
    // }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''} ${isLight ? "" : styles.isLight}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} md={3} lg={3} className="my-auto">
                        <Link href="/" className={`${styles.mainLogo} `} aria-label="Visit our website">
                            <MainLogo />
                        </Link>
                    </Col>
                    <Col xs={6} md={9} lg={7} className="my-auto">
                        <Navigation scrolled={scrolled} isLight={isLight} />
                    </Col>
                    <Col xs={6} md={2} lg={2} className="my-auto d-lg-block d-none">
                        <a href="tel:2106924850" className={`commonBtn ${styles.lastBtn}`} aria-label="Visit our Contact">
                            (210) 692-4850
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;
