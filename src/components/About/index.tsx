'use client'

import { Box, Text } from "@radix-ui/themes";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ButtonOutline from "../ButtonOutline";

const About = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  const cardRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const card = cardRef.current;

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 600px",
          end: "bottom 700px",
        },
      })
      .fromTo(card, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });

    return () => {
      gsap.killTweensOf(card);
    }
  }, [])

  return (
    <div style={{ marginBottom: 100 }} ref={cardRef}>
      <div className="w-full">
        <Box>
          <Text
            as="p"
            className="w-full text-[34px] leading-[1em] text-[#1e1e24]"
          >
            Bem-vindo ao <br />
            Studio Katia Gorniak
          </Text>
        </Box>
        <Box className="mt-4 mb-4">
          <Text
            as="p"
            className="font[400] text-[#1e1e24] leading[1.556em]"
          >
            Bem-vindo ao Studio Katia Gorniak onde a arte encontra a inovação
            para transformar cada fio em uma obra-prima. No nosso espaço
            dedicado à beleza capilar. Aqui, cada cliente é recebido com cuidado
            e atenção personalizado.
          </Text>
        </Box>
      </div>
      <ButtonOutline title="Sobre mim" url="about" />
    </div>
  );
}
 
export default About;