import React from "react";
import AllCategories from "../components/categories/AllCategories";

function OurMission() {
  return (
    <div>
      <>
        {/* hero seciton */}
        <div className="relative w-full h-[320px]" id="home">
          <div className="absolute inset-0 opacity-70">
            <img
              src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
                E-Shopping
              </h1>
              <p className="font-regular text-xl mb-8 mt-4">
                Best online shoping site
              </p>
              <a
                href="#contactUs"
                className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* our services section */}

        <AllCategories />
        {/* about us */}
        <section className="bg-gray-100" id="aboutus">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  About Us
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Welcome to E-Shop, your go-to destination for all your
                  shopping needs! We are committed to offering a diverse range
                  of high-quality products across various categories, including
                  clothing, home décor, electronics, outdoor essentials, and
                  much more. Who We Are At E-Shop, we believe that shopping
                  should be a seamless and enjoyable experience. Our platform is
                  designed to provide you with a curated collection of products
                  that cater to your style, preferences, and budget. From trendy
                  fashion to unique home décor pieces, we bring you the best in
                  quality and value. Our Mission Our mission is simple: to make
                  online shopping easy, accessible, and reliable for everyone.
                  We strive to provide a user-friendly experience with secure
                  transactions, fast delivery, and exceptional customer service.
                  Whether you're looking for everyday essentials or special
                  items to elevate your lifestyle, we've got you covered.
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* why us  */}
        <section className="text-gray-700 body-font mt-10">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
            Why Us?
          </div>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Latest Products
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Reasonable Rates
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Awesome Features
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    All Brand Products
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* gallery */}
        <section className="text-gray-700 body-font" id="gallery">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
            Gallery
          </div>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
            {/* Repeat this div for each image */}
          </div>
        </section>
        {/* Visit us section */}
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl font-extrabold text-gray-900"
                id="contactUs"
              >
                Visit Our Location
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Let us serve you the best
              </p>
            </div>
            <div className="mt-8 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        Contact
                      </h3>
                      <p className="mt-1 font-bold text-gray-600">
                        <a href="tel:+123">Phone: +91 123456789</a>
                      </p>
                      <a className="flex m-1" href="tel:+919823331842">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                            {/* Heroicon name: phone */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            Call now
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Our Address
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Sale galli, 60 foot road, Latur
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Hours
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Sunday : 2pm - 9pm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
                    className="w-full"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
      </>
    </div>
  );
}

export default OurMission;
