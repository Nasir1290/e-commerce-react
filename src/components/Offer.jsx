import { Image } from '@nextui-org/react'
import React from 'react'
import OfferImage from "../../src/assets/images/offer.png"

function Offer() {
  return (
    <div className="pb-16 m-auto flex justify-center items-center">
      <a href="#">
        <Image
          src={OfferImage}
          alt="ads"
          className=" w-[96%] items-center m-auto text-center"
        />
      </a>
    </div>
  )
}

export default Offer
