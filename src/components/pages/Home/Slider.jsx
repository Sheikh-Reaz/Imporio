import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import controllerImg from "../../../assets/controller.png";
import pixelImg from "../../../assets/pixel7.png";
import headsetImg from "../../../assets/headset.png";
import { NavLink } from "react-router";

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-7">
      {/* Grid: left = slider, right = static cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch rounded-2xl">
        {/* LEFT: Swiper (3 slides) */}
        <div className="md:col-span-3 bg-transparent rounded-2xl flex items-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="w-full rounded-2xl"
          >
            <div className="h-64 md:h-[500px]">
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="h-80 md:h-[500px] flex items-center justify-center p-0 overflow-hidden rounded-2xl">
                  <img
                    src={controllerImg}
                    alt="Controller"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="h-80 md:h-[500px] flex items-center justify-center p-0 overflow-hidden rounded-2xl">
                  <img
                    src={pixelImg}
                    alt="Pixel 7"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="h-80 md:h-[500px] flex items-center justify-center p-0 overflow-hidden rounded-2xl">
                  <img
                    src={headsetImg}
                    alt="Headset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        {/* RIGHT: Static product/cards (outside Swiper) */}
        <div className="grid md:col-span-2 grid-rows-2 gap-4">
          {/* Aurora Headset */}
          <div className="relative rounded-2xl overflow-hidden h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg.webp')",
              }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-40"></div>
            {/* Content */}
            <div className="relative p-6 flex flex-col justify-between h-full text-white">
              <div>
                <h3 className="text-xl font-semibold">Aurora Headset</h3>
                <p className="text-m font-semibold">Discount is running out  </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <NavLink to={"/products?category=accessories"} className="btn btn-primary btn-sm">Buy Now</NavLink>
              </div>
            </div>
          </div>

          {/* Dual Sense + Instant Camera */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/about-brand-3.jpg')",
                }}
              ></div>
              <div className="absolute inset-0  bg-opacity-40"></div>
              <div className="relative p-4 flex flex-col justify-between h-full text-white">
                <div>
                  <h4 className="font-semibold">New Dual Sense</h4>
                 
                </div>
                <div className="flex justify-between items-center mt-3">
                  <NavLink to={"/products?category=furniture"} className="btn btn-sm btn-outline border-white text-white">
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://woodmart.xtemos.com/makeup/wp-content/uploads/sites/22/2024/10/c2-prd-tp-4-290x202.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-opacity-40"></div>
              <div className="relative p-4 flex flex-col justify-between h-full text-white">
                <div>
                  <h4 className="font-semibold">Instant Glow</h4>
                  <p className="text-sm">Get photo paper as a gift</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <NavLink to={"/products?category=beauty"} className="btn btn-sm btn-outline border-white text-white">
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
