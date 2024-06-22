import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo2 from "../Footer/img/snapp-footer.logo.png";
import unity from "./img/sort11.png";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-between align-items-center flex-wrap p-4 my-5">
        <div className="mini-footer col-4 ">
          <div className="logo-des ">
            <div className="top-right-f d-flex justify-content-start align-items-center gap-3 ">
              <a href="#">
                <img src={logo2} alt="logo2" className="img-fluid " />
              </a>
              <div className="logo des">
                <h4>اسنپ فود</h4>
                <p>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
              </div>
            </div>
          </div>

          <div className="social-f d-flex justify-content-end align-items-center gap-3 my-2">
            <InstagramIcon sx={{ fontSize: 42 }} />
            <TelegramIcon sx={{ fontSize: 42 }} />
            <TwitterIcon sx={{ fontSize: 42 }} />
            <YouTubeIcon sx={{ fontSize: 42 }} />
          </div>
        </div>
        <div className="mini-footer">
          <ul>
            <li>
              <a href="#">درباره اسنپ‌فود</a>
            </li>
            <li>
              <a href="#">فرصت‌های شغلی</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
            <li>
              <a href="#">قوانین سایت</a>
            </li>
            <li>
              <a href="#">حریم خصوصی</a>
            </li>
            <li>
              <a href="#">ثبت نام فروشندگان</a>
            </li>
          </ul>
        </div>
        <div className="mini-footer">
          <ul>
            <li>
              <a href="#">تماس با اسنپ‌فود</a>
            </li>
            <li>
              <a href="#">پرسش‌های متداول</a>
            </li>
            <li>
              <a href="#">ثبت شکایات</a>
            </li>
            <li>
              <a href="#">اپلیکیشن موبایل</a>
            </li>
          </ul>
        </div>
        <div className="mini-footer">
          {" "}
          <a href="#">
            {" "}
            <img src={unity} alt="#" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
