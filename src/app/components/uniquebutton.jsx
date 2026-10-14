
"use client";
import styles from "@/styles/components/uniquebutton.module.scss"
import PopUp from "@/src/app/components/popup";
import { useState } from "react";

const UniqueButton = ({ center, BgBlack, txt, SimpleBtn, OneBtn, whiteBtn }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };


    // Chat Code
    const openChat = () => {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.toggle?.();
    };

    return (
        <>
            {SimpleBtn ?
                <button className={`${SimpleBtn ? styles.SimpleBtn : ""}`} onClick={() => handleClick()}>
                    <div className={styles.btnStyle}>{txt}</div>
                </button>

                :
                <div className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""} ${whiteBtn ? styles.whiteBtn : ""}`} >
                    <button className={styles.btnStyle} onClick={() => handleClick()}>{txt}</button>
                    {!OneBtn ?
                        <button className={styles.chatStyle} onClick={openChat}>Chat Now</button>
                        : ''
                    }
                </div>
            }
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default UniqueButton