"use client";

import { Carousel } from "flowbite-react";
import Carousel1 from "../assets/images/carousel-1.jpg";
import Carousel2 from "../assets/images/carousel-2.jpg";
import Carousel3 from "../assets/images/carousel-3.jpg";
import Carousel4 from "../assets/images/carousel-4.jpg";
import Carousel5 from "../assets/images/carousel-5.jpg";
import { motion } from "framer-motion";

export function CarouselItem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4 }}
      className=" mt-2 h-56 sm:h-[25rem] xl:h-[28rem] 2xl:h-96 scroll-smooth"
    >
      <Carousel slideInterval={1000}>
        <img src={Carousel2} alt="..." />
        <img src={Carousel3} alt="..." />
        <img src={Carousel4} alt="..." />
        <img src={Carousel1} alt="..." />
        <img src={Carousel5} alt="..." />
      </Carousel>
    </motion.div>
  );
}
