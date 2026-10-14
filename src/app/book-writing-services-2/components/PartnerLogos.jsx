import Image from "next/image";
import styles from "../book-writing-2.module.scss";

import Client01 from "media/home/clientsLogo/01.webp";
import Client02 from "media/home/clientsLogo/02.webp";
import Client03 from "media/home/clientsLogo/03.webp";
import Client04 from "media/home/clientsLogo/04.webp";
import Client05 from "media/home/clientsLogo/05.webp";
import Client06 from "media/home/clientsLogo/06.webp";
import Client07 from "media/home/clientsLogo/07.webp";
import Client08 from "media/home/clientsLogo/06.webp";
import Client09 from "media/home/clientsLogo/09.webp";
import Client10 from "media/home/clientsLogo/10.webp";
import Client11 from "media/home/clientsLogo/11.webp";
import Client12 from "media/home/clientsLogo/12.webp";

const logos = [
  { name: "Client 01", src: Client01 },
  { name: "Client 02", src: Client02 },
  { name: "Client 03", src: Client03 },
  { name: "Client 04", src: Client04 },
  { name: "Client 05", src: Client05 },
  { name: "Client 06", src: Client06 },
  { name: "Client 07", src: Client07 },
  { name: "Client 08", src: Client08 },
  { name: "Client 09", src: Client09 },
  { name: "Client 10", src: Client10 },
  { name: "Client 11", src: Client11 },
  { name: "Client 12", src: Client12 },
];

export default function PartnerLogos() {
  // Continuous seamless marquee carousel
  const carouselLogos = [...logos, ...logos, ...logos];

  return (
    <div className={styles.bottomLogosBar}>
      <div className={styles.logosCarouselWrapper}>
        <div className={styles.logosCarouselTrack}>
          {carouselLogos.map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className={styles.partnerLogo}>
              <Image
                src={logo.src}
                alt={logo.name}
                priority={idx < 12}
                style={{ height: "30px", width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


