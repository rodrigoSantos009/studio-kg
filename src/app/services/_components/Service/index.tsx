'use client';

import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  process: string;
}

const Service = (service: ServiceProps) => {
  const router = useRouter();
  
  const handleBookingClick = () => {
    router.push(`services/${service.id}`);
  };
  return (
    <div className={styles.listCards}>
      <div className={styles.card} onClick={handleBookingClick}>
        <Image
          src={service.image}
          alt="test"
          objectFit="cover"
          fill
          className={styles.img}
        />
        <div className={styles.cardTitle}>
          <h3 className={styles.title}>
            {service.title}
          </h3>
          <div className={styles.cardIcon}>
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Service;  