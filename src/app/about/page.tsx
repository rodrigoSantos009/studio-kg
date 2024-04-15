'use client';

import gsap from "gsap";

import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const AboutPage = () => {
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

    tl.fromTo(title, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(
        description,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "-=0.75"
      )
      .fromTo(areaBtn, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=0.75")
      .fromTo(image, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=0.75");
  }, []);

  return (
    <div>
      <div>
        <HeaderTop />
        <div className="w-[90%] mx-auto">
          <h1 className="text-[40px] mb-2" ref={titleRef}>Sobre mim</h1>
          <p className="text-left mx-auto mb-6 text-[gray]" ref={descriptionRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus
            quia tenetur commodi! Illum adipisci, ab eius, velit distinctio
            laudantium accusantium et incidunt itaque, dignissimos suscipit
            voluptatum voluptates nam sit?
          </p>
          <div className="w-[full] h-[423px] mb-[27px] mt-10 relative rounded-[15px]" ref={imageRef}>
            <Image
              src="/katia.jpg"
              alt="Katia Gorniak"
              objectFit="cover"
              fill
              className="rounded-[15px]"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
 
export default AboutPage;