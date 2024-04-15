'use client';

import ButtonNormal from "../ButtonNormal";
import ButtonOutline from "../ButtonOutline";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

import styles from "./footer.module.css";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { Scissors } from "lucide-react";

const Footer = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  const cardRef = useRef(null);
  const cardContentRef = useRef(null);
  const areaBtnRef = useRef(null);
  const imageRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;
    const cardContent = cardContentRef.current;
    const areaBtn = areaBtnRef.current;
    const image = imageRef.current;
    const bottom = bottomRef.current;
    
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 600px",
          end: "bottom 800px",
        },
      })
      .fromTo(card, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(cardContent, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(areaBtn, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(image, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(bottom, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: .2, duration: .2 });

    return () => {
      gsap.killTweensOf(card);
    };
  }, []);

  return (
    <div className={styles.footer} ref={cardRef}>
      <div className={styles.subFooter}>
        <div>
          <div ref={cardContentRef}>
            <p

              className="text-[26px] text-[#1e1e24] font-semibold mb-[25px]"
            >
              Pronta para uma mudança revolucionária de visual? Estamos aqui
              para fazer você brilhar como nunca antes.
            </p>
          </div>
          <div className="mt-4" ref={areaBtnRef}>
            <ButtonOutline title="Fazer uma reserva" url="" />
            <ButtonNormal title="Ver serviços" url="/services" />
          </div>
        </div>
        <div className={styles.subFooterImage} ref={imageRef}>
          <Image
            src="/pick.png"
            alt="image"
            width={300}
            height={500}
          />
        </div>
      </div>
      <div ref={bottomRef}>
        <div className="mb-[15px]">
          <p className="flex items-center mb-4">
            <Scissors height={20} /> KATIA GORNIAK
          </p>
          <ButtonOutline title="Contato" url="" />
        </div>
        <div className="flex justify-between gap-[20px] mb-[15px]">
          <p className={styles.text}>Início</p>
          <p className={styles.text}>Serviços</p>
          <p className={styles.text}>Sobre</p>
          <p className={styles.text}>Notícias</p>
        </div>
        <div className="flex justify-between gap-[20px]">
          <p className={styles.text}>
            <FaInstagram size={39} />
          </p>
          <p className={styles.text}>
            <FaWhatsapp size={39} />
          </p>
          <p className={styles.text}>
            <FaFacebook size={39} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
