import { Image } from '@nextui-org/react'
import React from 'react'
import OfferImage from "../../src/assets/images/offer.png"
import { animate, motion } from "framer-motion"

function Offer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      onViewportEnter={{animate:{ opacity: 1, scale: 1 }}}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4 }}
      className="pb-16 m-auto flex justify-center items-center"
    >
      <a href="#">
        <Image
          src={OfferImage}
          alt="ads"
          className=" w-[96%] items-center m-auto text-center"
        />
      </a>
    </motion.div>
  );
}

export default Offer
