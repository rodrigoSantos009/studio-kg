'use client';

import styles from "./services.module.css";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Service } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ServiceItemProps {
  service: Service
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const router = useRouter();
  const tl = useRef<gsap.core.Timeline | null>(null);

  const cardRef = useRef(null);
  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;
    const images = imagesRef.current;

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 800px",
          end: "bottom 900px",
        },
      })
      .fromTo(card, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(images, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });

    return () => {
      gsap.killTweensOf(card);
    };
  }, []);

  const handleBookingClick = () => {
    router.push(`/services/${service.id}`);
  };

  return (
    <div className={styles.listCards} ref={cardRef}>
      <div className={styles.card} onClick={handleBookingClick} ref={imagesRef}>
        <Image
          src={service.imageUrl}
          alt={service.name}
          objectFit="cover"
          fill
          className={styles.img}
        />
        <div className={styles.cardTitle}>
          <h3 className={styles.title}>{service.name}</h3>
          <div className={styles.cardIcon}>
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ServiceItem;