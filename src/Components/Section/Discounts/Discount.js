import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import React, { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Discount = ({ products, New, Best }) => {
  const [size, setsize] = useState(window.innerWidth);
  const getW = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getW);

    return () => {
      window.removeEventListener("resize", getW);
    };
  }, []);
  const getSlidesPerView = () => {
    if (size >= 992) {
      return 4;
    } else if ((size) => 769 && size <= 991) {
      return 2;
    } else if (size <= 768) {
      return 1;
    }
  };
  console.log(size);
  return (
    <>
      <div className="top-products d-flex justify-content-between align-items-center my-4 ">
        <h2>پیشنهاد کاربران</h2>

        <a href="#">
          {" "}
          مشاهده همه <ArrowBackIosIcon />
        </a>
      </div>

      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <div className="main-products ">
                <div className="buttom-products  position-relative rounded-3 w-100 ">
                  <img
                    src={elem.image}
                    alt=""
                    className="img-fluid w-100 rounded-3"
                  />
                  <h3 className="product-header ">{elem.name}</h3>
                  <div className="comment d-flex justify-content-center align-items-center gap-2">
                    <p>
                      <StarIcon
                        sx={{ fontSize: 17 }}
                        className="text-warning"
                      />{" "}
                      {elem.rate}
                    </p>
                    <p>({elem.comment})</p>
                  </div>
                  <p className="text-center">ایرانی سنتی گوشت</p>
                  <p className="text-center ">
                    <SportsMotorsportsIcon></SportsMotorsportsIcon> پیک فروشنده{" "}
                    <span>{elem.price}</span> تومان
                  </p>
                  <img
                    src={elem.icon}
                    alt="sorting"
                    className=" sort-icon rounded-3 w-25"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="top-products d-flex justify-content-between align-items-center my-4 ">
        <h2>تازه ها در اسنپ فود</h2>

        <a href="#">
          {" "}
          مشاهده همه <ArrowBackIosIcon />
        </a>
      </div>

      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {New.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <div className="main-products ">
                <div className="buttom-products  position-relative rounded-3 w-100 ">
                  <img
                    src={elem.image}
                    alt=""
                    className="img-fluid w-100 rounded-3"
                  />
                  <h3 className="product-header ">{elem.name}</h3>
                  <div className="comment d-flex justify-content-center align-items-center gap-2">
                    <p>
                      <StarIcon
                        sx={{ fontSize: 17 }}
                        className="text-warning"
                      />{" "}
                      {elem.rate}
                    </p>
                    <p>({elem.comment})</p>
                  </div>
                  <p className="text-center">ایرانی سنتی گوشت</p>
                  <p className="text-center ">
                    <SportsMotorsportsIcon></SportsMotorsportsIcon> پیک فروشنده{" "}
                    <span>{elem.price}</span> تومان
                  </p>
                  <img
                    src={elem.icon}
                    alt="sorting"
                    className=" sort-icon rounded-3 w-25"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="top-products d-flex justify-content-between align-items-center my-4 ">
        <h2>برترین ها</h2>

        <a href="#">
          {" "}
          مشاهده همه <ArrowBackIosIcon />
        </a>
      </div>

      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Best.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <div className="main-products ">
                <div className="buttom-products  position-relative rounded-3 w-100 ">
                  <img
                    src={elem.image}
                    alt=""
                    className="img-fluid w-100 rounded-3"
                  />
                  <h3 className="product-header ">{elem.name}</h3>
                  <div className="comment d-flex justify-content-center align-items-center gap-2">
                    <p>
                      <StarIcon
                        sx={{ fontSize: 17 }}
                        className="text-warning"
                      />{" "}
                      {elem.rate}
                    </p>
                    <p>({elem.comment})</p>
                  </div>
                  <p className="text-center">ایرانی سنتی گوشت</p>
                  <p className="text-center ">
                    <SportsMotorsportsIcon></SportsMotorsportsIcon> پیک فروشنده{" "}
                    <span>{elem.price}</span> تومان
                  </p>
                  <img
                    src={elem.icon}
                    alt="sorting"
                    className=" sort-icon rounded-3 w-25"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Discount;
