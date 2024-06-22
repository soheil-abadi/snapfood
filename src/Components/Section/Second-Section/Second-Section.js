import phoneimg from "./img/phone.png";
import applogo from "./img/bazarbadge.png";
import applogo2 from "./img/miket.png";

import applogo3 from "./img/سیب اپ.png";

import applogo4 from "./img/dl_IAPPS.png";

const SecondSection = () => {
  return (
    <>
      <div className="mainsecond d-flex justify-content-center align-items-center gap-2   m-auto px-5">
        <div className="topright col-6 ">
          <h3>اپلیکیشن اسنپ‌فود</h3>
          <p>
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
          </p>

          <label htmlFor="phone-input" className="d-block fw-bold">
            برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
          </label>
          <div className="phone-check position-relative  ">
            <input
              type="text"
              className="px-5 py-3 border-0 rounded-3 phone-input  "
              placeholder="*********09"
            />{" "}
            <button className=" phone-button position-absolute rounded-3 p-1 text-white border-0">
              دریافت لینک
            </button>
          </div>
          <div className="applogo d-flex justify-content-start align-items-center  flex-wrap my-3 gap-1 ">
            <a href="#" className="col-6">
              {" "}
              <img src={applogo} alt="applogo" className="img-fluid" />
            </a>
            <a href="#" className="col-6">
              {" "}
              <img src={applogo2} alt="applogo" className="img-fluid" />
            </a>
            <a href="#" className="col-6">
              {" "}
              <img src={applogo3} alt="applogo" className="img-fluid" />
            </a>
            <a href="#" className="col-6">
              {" "}
              <img src={applogo4} alt="applogo" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="topleft col-lg-6 d-sm-none p-sm-3 d-lg-block p-lg-0">
          <img src={phoneimg} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
