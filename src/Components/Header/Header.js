import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import logo from "./img/snapfood-logo.png";
import logofood1 from "./img/top-header-img/linkdin post 501.png";
import logofood2 from "./img/top-header-img/linkdin post 502.png";
import logofood3 from "./img/top-header-img/linkdin post 503.png";
import logofood4 from "./img/top-header-img/linkdin post 504.png";
import logofood5 from "./img/top-header-img/linkdin post 505.png";
import logofood6 from "./img/top-header-img/linkdin post 506.png";
import logofood7 from "./img/top-header-img/linkdin post 507.png";
import logofood8 from "./img/top-header-img/linkdin post 508.png";
import logofood9 from "./img/top-header-img/linkdin post 509.png";
import logofood10 from "./img/top-header-img/linkdin post 510.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="top-header d-md-flex align-items-center justify-content-between   flex-wrap ">
          <div className="top-right d-flex justify-content-evenly align-items-center  col-md-8  ">
            <img className="header-logo" src={logo} alt="logo-image" />
            <p>
              {" "}
              <LocationOnIcon fontSize="xsmall" className=" mx-2" />
              تهران بلوار مرزداران ...
              <KeyboardArrowDownIcon
                fontSize="large"
                className="  maincolor mx-2"
              />{" "}
            </p>
            <input
              type="text"
              name="searchbar"
              id="search"
              className=" input-header rounded-2 border-0  p-3 w-50"
              placeholder="جست و جو در اسپ فود"
            />
          </div>
          <div className="top-left d-flex  justify-content-end  align-items-center justify-content-sm-center gap-5 col-md-3 ">
            <p>
              سفارش ها <ReceiptIcon color="white" />
            </p>
            <i>
              <PersonIcon fontSize="large" />
            </i>
          </div>
        </div>
        <div className="buttom-header  d-md-flex justify-content-evenly align-items-center gap-3 my-4 ">
          <div className="icons  col-sm-3 col-md-2  col-lg-1  col-xs-1">
            {" "}
            <img
              src={logofood1}
              className=" img-fluid d-block mx-auto  "
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood2}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood3}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood4}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood5}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood6}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood7}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood8}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood9}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
          <div className="icons  col-sm-3 col-md-2 col-lg-1">
            {" "}
            <img
              src={logofood10}
              className=" img-fluid d-block mx-auto"
              alt=""
            />
            <p className=" text-center"> فست فود</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
