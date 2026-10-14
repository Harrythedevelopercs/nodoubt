
"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/booktabs.module.scss"
import Image from "next/image"
import Book01 from "media/portfolio/book/book1.webp"
import Book02 from "media/portfolio/book/book2.webp"
import Book03 from "media/portfolio/book/book3.webp"
import Book04 from "media/portfolio/book/book4.webp"
import Book05 from "media/portfolio/book/book5.webp"
import Book06 from "media/portfolio/book/book6.webp"
import Book07 from "media/portfolio/book/book7.webp"
import Book08 from "media/portfolio/book/book8.webp"
import Book09 from "media/portfolio/book/book9.webp"
import Book10 from "media/portfolio/book/book10.webp"
import Link from "next/link";

import ImgInd01 from "media/portfolio/illustrator/1.webp";
import ImgInd02 from "media/portfolio/illustrator/2.webp";
import ImgInd03 from "media/portfolio/illustrator/3.webp";
import ImgInd04 from "media/portfolio/illustrator/4.webp";
import ImgInd05 from "media/portfolio/illustrator/5.webp";
import ImgInd06 from "media/portfolio/illustrator/6.webp";
import ImgInd07 from "media/portfolio/illustrator/7.webp";

//Personal Stories

import PS1 from "media/portfolio/personal-stories/P1.webp";
import PS2 from "media/portfolio/personal-stories/P2.webp";
import PS3 from "media/portfolio/personal-stories/P3.webp";
import PS4 from "media/portfolio/personal-stories/P4.webp";
import PS5 from "media/portfolio/personal-stories/P5.webp";
import PS6 from "media/portfolio/personal-stories/P6.webp";
import PS8 from "media/portfolio/personal-stories/P8.webp";
import PS9 from "media/portfolio/personal-stories/P9.webp";
import PS10 from "media/portfolio/personal-stories/P10.webp";
import PS11 from "media/portfolio/personal-stories/P11.webp";

//Non-Fiction
import NF1 from "media/portfolio/non-fiction/NF1.webp";
import NF2 from "media/portfolio/non-fiction/NF2.webp";
import NF3 from "media/portfolio/non-fiction/NF3.webp";
import NF4 from "media/portfolio/non-fiction/NF4.webp";
import NF5 from "media/portfolio/non-fiction/NF5.webp";
import NF6 from "media/portfolio/non-fiction/NF6.webp";
import NF7 from "media/portfolio/non-fiction/NF7.webp";
import NF8 from "media/portfolio/non-fiction/NF8.webp";
import NF9 from "media/portfolio/non-fiction/NF9.webp";
import NF10 from "media/portfolio/non-fiction/NF10.webp";
import NF11 from "media/portfolio/non-fiction/NF11.webp";
import NF12 from "media/portfolio/non-fiction/NF12.webp";

//Fiction

import F1 from "media/portfolio/fiction/F1.webp";
import F2 from "media/portfolio/fiction/F2.webp";
import F3 from "media/portfolio/fiction/F3.webp";
import F4 from "media/portfolio/fiction/F4.webp";
import F5 from "media/portfolio/fiction/F5.webp";
import F6 from "media/portfolio/fiction/F6.webp";
import F7 from "media/portfolio/fiction/F7.webp";
import F8 from "media/portfolio/fiction/F8.webp";
import F9 from "media/portfolio/fiction/F9.webp";
import F10 from "media/portfolio/fiction/F10.webp";
import F11 from "media/portfolio/fiction/F11.webp";
import F12 from "media/portfolio/fiction/F12.webp";

//Children’s Books
import C1 from "media/portfolio/children-books/C1.webp";
import C2 from "media/portfolio/children-books/C2.webp";
import C3 from "media/portfolio/children-books/C3.webp";
import C4 from "media/portfolio/children-books/C4.webp";
import C5 from "media/portfolio/children-books/C5.webp";
import C6 from "media/portfolio/children-books/C6.webp";
import C7 from "media/portfolio/children-books/C7.webp";
import C8 from "media/portfolio/children-books/C8.webp";


//Biographies 

import A1 from "media/portfolio/biographies/A1.webp";
import A2 from "media/portfolio/biographies/A2.webp";
import A3 from "media/portfolio/biographies/A3.webp";
import A4 from "media/portfolio/biographies/A4.webp";
import A5 from "media/portfolio/biographies/A5.webp";
import A6 from "media/portfolio/biographies/A6.webp";
import A7 from "media/portfolio/biographies/A7.webp";

const data = {
    subtitle: "Our Gallery",
    title: "Our Latest Book Publishing Projects",
    desc: "Every book here was written for an author who came to us with an idea, some notes, or a draft that had stalled. Browse by genre to see the range.",

    BookTabsItem: [
        {
            tabtitle: "Fiction",
            images: [
                F1.src,
                F2.src,
                F3.src,
                F4.src,
                F5.src,
                F6.src,
                F7.src,
                F8.src,
                F9.src,
                F10.src,
                F11.src,
                F12.src,
            ],
        },
        {
            tabtitle: "Non-Fiction",
            images: [
                NF1.src,
                NF2.src,
                NF3.src,
                NF4.src,
                NF5.src,
                NF6.src,
                NF7.src,
                NF8.src,
                NF9.src,
                NF10.src,
                NF11.src,
                NF12.src,
            ],
        },
        {
            tabtitle: "Biographies",
            images: [
                A1.src,
                A2.src,
                A3.src,
                A4.src,
                A5.src,
                A6.src,
                A7.src,
            ],
        },
        {
            tabtitle: "Children’s Books",
            images: [
                C1.src,
                C2.src,
                C3.src,
                C4.src,
                C5.src,
                C6.src,
                C7.src,
                C8.src,

            ],
        },
        {
            tabtitle: "Personal Stories",
            images: [
                PS1.src,
                PS2.src,
                PS3.src,
                PS4.src,
                PS5.src,
                PS6.src,
                PS8.src,
                PS9.src,
                PS10.src,
                PS11.src,
            ],
        },
    ]

}

const BookTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`pt-100 ${styles.bookTabs}`} id="PortfolioId">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabContainer}>
                            <div className={styles.tabHeader}>
                                <ul>
                                    {data.BookTabsItem.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span>{tab.tabtitle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabBody}>
                                {data.BookTabsItem[activeTab].images.map((imgSrc, imgIndex) => (
                                    <div className={styles.ImageBox} key={imgIndex}>
                                        <Image
                                            src={imgSrc}
                                            alt={`${data.BookTabsItem[activeTab].tabtitle} book design example ${imgIndex + 1}`}
                                            fill
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BookTabs