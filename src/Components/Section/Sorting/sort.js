import sort1 from "./img/sort101.jpg";
import sort2 from "./img/sort102.jpg";
import sort3 from "./img/sort103.jpg";
import sort4 from "./img/sort104.jpg";
import sort5 from "./img/sort105.jpg";
import sort6 from "./img/sort106.jpg";
import sort7 from "./img/sort107.jpg";
import sort8 from "./img/sort108.jpg";
import sort9 from "./img/sort109.jpg";
import sort10 from "./img/sort110.jpg";
import sort11 from "./img/sort111.jpg";
import sort12 from "./img/sort112.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const Sort = () => {
  return (
    <>
      <div className="sorts d-md-flex justify-content-center align-items-center flex-wrap gap-3  my-5 d-sm-block w-100 m-auto a ">
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort1}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            ایرانی <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort2}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            فست فود <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort3}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            کباب <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort4}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            پیتزا <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2 position-relative  transition">
          <img
            src={sort5}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            برگر <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2 position-relative  transition">
          <img
            src={sort6}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            ساندویچ <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort7}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            سوخاری <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort8}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            پاستا <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort9}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            سالاد <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort10}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            دریایی <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort11}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            دریایی <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
        <div className="minisorts col-sm-6 col-md-2  position-relative  transition">
          <img
            src={sort12}
            alt="food sorting "
            className="rounded-3 img-fluid "
          />
          <p className="sort-title">
            گیلانی <KeyboardArrowLeftIcon className="maincolor icon " />
          </p>
        </div>
      </div>
    </>
  );
};

export default Sort;
