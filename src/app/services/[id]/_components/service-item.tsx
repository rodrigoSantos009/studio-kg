'use client';

import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Service } from "@prisma/client";
import { Text } from "@radix-ui/themes";
import ButtonOutline from "@/components/ButtonOutline";

interface ServiceProps {
  service: Service
}

const ServiceItem = ({ service }: ServiceProps) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const areaBtnRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const title = titleRef.current;
    const description = descriptionRef.current;
    const areaBtn = areaBtnRef.current;
    const image = imageRef.current;

    tl.fromTo(
      title, 
      { opacity: 0, y: 100},
      { opacity: 1, y: 0 }
    ).fromTo(
      description,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.75"
    ).fromTo(
      areaBtn,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.75"
    ).fromTo(
      image, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=0.75"
    );
  }, []);

  return (
    <div>
      <h1 className="text-[40px] mb-2" ref={titleRef}>{service.name}</h1>
      <Text as="p" color="gray" className="text-left mx-auto mb-6" ref={descriptionRef}>
        {service.description}
      </Text>
      <div ref={areaBtnRef}>
        <ButtonOutline title="Reservar" url="" />
      </div>
      <div className="w-[full] h-[423px] mb-[27px] mt-10 relative cursor-pointer rounded-[15px]" ref={imageRef}>
        <Image
          src={service.imageUrl}
          alt="test"
          objectFit="cover"
          fill
          className="rounded-[15px]"
        />
      </div>
    </div>
  );
}
 
export default ServiceItem;