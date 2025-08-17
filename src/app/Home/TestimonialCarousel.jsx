"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import { testimonials } from "@/data/home/testimonialsData";

export default function TiltedTestimonialSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const applyTilt = () => {
      const slides = swiper.slides;
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.style.transition = "transform 0.8s, opacity 0.8s";
        const slideIndex = slide.swiperSlideIndex;
        const realIndex = swiper.realIndex;
        const diff = (slideIndex - realIndex + slides.length) % slides.length;

        if (diff === 0) {
          slide.style.transform =
            "perspective(1200px) rotateY(0deg) scale(1.1)";
          slide.style.opacity = 1;
          slide.style.zIndex = 10;
        } else if (diff === 1 || diff === -slides.length + 1) {
          slide.style.transform =
            "perspective(1200px) rotateY(-25deg) scale(0.9)";
          slide.style.opacity = 0.6;
          slide.style.zIndex = 5;
        } else if (diff === slides.length - 1 || diff === -1) {
          slide.style.transform =
            "perspective(1200px) rotateY(25deg) scale(0.9)";
          slide.style.opacity = 0.6;
          slide.style.zIndex = 5;
        } else {
          slide.style.transform = "perspective(1200px) scale(0.8)";
          slide.style.opacity = 0;
          slide.style.zIndex = 1;
        }
      }
    };

    const updateArrowSize = () => {
      const arrows = document.querySelectorAll(
        ".swiper-button-next, .swiper-button-prev"
      );
      arrows.forEach((arrow) => {
        if (window.innerWidth < 640) {
          arrow.style.width = "24px";
          arrow.style.height = "24px";
          arrow.style.fontSize = "18px";
        } else {
          arrow.style.width = "44px";
          arrow.style.height = "44px";
          arrow.style.fontSize = "24px";
        }
      });
    };

    swiper.on("slideChange", applyTilt);
    swiper.on("afterInit", () => {
      applyTilt();
      updateArrowSize();
    });
    swiper.on("setTransition", (t) => {
      swiper.slides.forEach((s) => {
        s.style.transition = `${t}ms`;
      });
    });

    window.addEventListener("resize", updateArrowSize);
    return () => {
      window.removeEventListener("resize", updateArrowSize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-main1)",
        color: "var(--text-color)",
      }}
    >
      <div
        className="mx-auto h-2 md:w-[800px] w-[300px] rounded-2xl"
        style={{
          backgroundColor: "var(--bg-main7)",
        }}
      ></div>
      <section className=" py-20 w-[90%] mx-auto">
        <FadeUpOnScroll className="text-center text-4xl md:text-5xl mb-10">
          Testimonials
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div className="max-w-[1600px] mx-auto px-2 sm:px-4 relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              navigation={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              centeredSlides={true}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-transparent px-4 py-10 md:px-12 md:py-16 rounded-xl text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={t.logo}
                    alt="logo"
                    className="h-14 md:h-16 mx-auto mb-6"
                  />
                  <p className="text-sm sm:text-base md:text-base  mb-6 mt-6 md:mt-10 leading-relaxed">
                    {t.desc}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeUpOnScroll>
      </section>
      <div
        className="mx-auto h-2 md:w-[800px] w-[300px] rounded-2xl"
        style={{
          backgroundColor: "var(--bg-main7)",
        }}
      ></div>
    </div>
  );
}
