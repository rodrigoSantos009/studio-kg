'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

interface ProcessItemProps {
  process: string
}

const ProcessItem = ({ process }: ProcessItemProps) => {
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;
    const description = descriptionRef.current;

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 600px",
          end: "bottom 800px",
        },
      })
      .fromTo(card, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(description, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });

    return () => {
      gsap.killTweensOf(".items");
    };
  }, []);

  return (
    <div className="my-28 py-20 px-4 rounded-xl bg-[#F5F5F5]" ref={cardRef}>
      <div ref={descriptionRef}>
        <h2 className="text-3xl mb-2">Sobre o serviço</h2>
        <p className="text-[#414147]">
          {process}
        </p>
      </div>
    </div>
  );
};
 
export default ProcessItem;