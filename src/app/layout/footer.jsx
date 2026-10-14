import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import { FacebookIcon, Instagram, LinkedInIcon, MainLogo, PinterestIcon, TikTokIcon, TwitterIcon, VimeoIcon, YoutubeIcon } from "@/src/app/app-constants"
import Link from "next/link"


const Footer = () => {
    return (
        <>

            <section className={`${styles.footerSection}`}>
                <Container>
                    <Row className="d-flex align-items-stretch">
                        <Col md={12} lg={4} className="ps-lg-0">
                            <div className={styles.socialBox}>
                                <div className={styles.logo}>
                                    <MainLogo />
                                </div>
                                <p>From the first word to the final sale, we’ve got you covered; writing, editing, publishing, and marketing all in one place.</p>
                                <ul className={styles.socialLinks}>
                                    <li><a href="https://www.facebook.com/yourbrand/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a></li>
                                    <li><a href="https://www.instagram.com/yourbrand/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram"><Instagram /></a></li>
                                    <li><a href="https://www.linkedin.com/company/yourbrand/" target="_blank" rel="nofollow noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a></li>
                                    <li><a href="https://www.tiktok.com/@yourbrand" target="_blank" rel="nofollow noopener noreferrer" aria-label="TikTok"><TikTokIcon /></a></li>
                                    <li><a href="https://www.pinterest.com/yourbrand/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Pinterest"><PinterestIcon /></a></li>
                                    <li><a href="https://x.com/yourbrand" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a></li>
                                    <li><a href="https://www.youtube.com/@yourbrand" target="_blank" rel="nofollow noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} lg={8} className="pe-lg-0">
                            <div className={styles.contactLinks}>
                                <div className={styles.LinksBox}>
                                    <div className={styles.LinksItem}>
                                        <h5>Quick Links</h5>
                                        <ul>
                                            <li><Link href="/pricing">Pricing</Link></li>
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Our Services</h5>
                                        <ul>
                                            <li><Link href="/book-writing-services">Book Writing</Link></li>
                                            <li><Link href="/book-trailer-services">Book Video Trailer</Link></li>
                                            <li><Link href="/book-editing-services">Book Editing</Link></li>
                                            <li><Link href="/book-publishing-services">Book Publishing</Link></li>
                                            <li><Link href="/book-cover-design-services">Book Cover Design</Link></li>
                                            <li><Link href="/book-marketing-services">Book Marketing</Link></li>
                                            <li><Link href="/audiobook-recording-services">Audio Book</Link></li>
                                            <li><Link href="/children-book-illustrator">Children Book Illustration</Link></li>
                                            <li><Link href="/author-website-design-services">Author Website</Link></li>
                                            <li><Link href="/children-book-publication-services">Children Book Publication</Link></li>

                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Contact Us</h5>
                                        <ul>
                                            <li>Email: <Link href="mailto:info@yourbrand.com">info@yourbrand.com</Link></li>
                                            <li>For Project Inquiry: <a href="tel:2106924850">(210) 692-4850</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className={`${styles.copyRightSection}`}>
                <Container className={`${styles.bgGrayColor} h-100`}>
                    <Row className="h-100">
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <h6>Head Office</h6>
                                <p>11826 Gardner park ln <br />Sugar Land, TX 77498</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto text-center">
                            <div className={styles.copyItem}>
                                <p>© 2026 Heritage Leaf Books. All Rights Reserved.</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <ul className={styles.copyLinks}>
                                    <li><Link href="/terms-of-use">Terms of Use</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer