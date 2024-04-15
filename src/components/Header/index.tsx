'use client';

import { Button, Text } from "@radix-ui/themes";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./header.module.css";
import HeaderTop from "../HeaderTop";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;

   tl.fromTo(card, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
     .fromTo(title, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=0.75")
     .fromTo(button, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=0.75");
  }, [])

  return (
    <div className={styles.main} ref={cardRef}>
      <HeaderTop />
      <section className={styles.card}>
        <div>
          <Text
            as="p"
            className="text-neutral-100 text-[42px] mb-8 leading-[1em]"
            ref={titleRef}
          >
            Beleza e cuidados para seu cabelo
          </Text>
          <Button 
            variant="outline" 
            className={styles.button} 
            ref={buttonRef}
            onClick={() => router.push("/services")}
          >
            Nossos serviços
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Header;
