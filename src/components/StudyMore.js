import React from "react";
import { Link } from "react-router-dom";

const StudyMore = ({ handleClick }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="Headeram">
            <h4>متاسفانه شما شرایط قبولی ندارید </h4>
            <p>
              متاسفانه شما به دلیل کمبود واحد و یا معدل شرایط قبولی را ندارید و
              نیاز به انتخاب واحد دارید برای رفتن به صفحه انتخاب واحد روی لینک{" "}
              <strong>انتخاب واحد</strong> کلیک کنید
            </p>
            <p>
              برای خواندن قوانین لطفا به صفحه <strong>خانه</strong> مراجعه کنید
            </p>
          </div>
        </div>
      </div>
      <div className="custom_hr"></div>
      <div className="row">
        <div className="col">
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleClick()}
            >
              بازگشت
            </button>
            <Link to={"/credittable"} className="btn btn-sm mx-1 btn-primary">
              انتخاب واحد
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyMore;
