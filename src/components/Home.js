import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div>
            <h3>شرایط قبولی</h3>
            <div className="custom_hr"></div>
            <p>
              <strong>کاردانی: </strong>در مقطع کاردانی اگر دانشجو نتواند تا قبل
              از ترم 6 حداقل 72 واحد را با معدل 10 پاس کند ، مشروط خواهد شد
            </p>
            <p>
              <strong>کارشناسی: </strong>در مقطع کارشناسی اگر دانشجو نتواند تا
              ترم 8 حداقل 68 واحد را با معدل 12 پاس کند ، مشروط خواهد شد
            </p>
            <p>
              <strong>دکترا : </strong>در مقطع دکترا اگر دانشجو نتواند تا ترم 6
              حداقل 32 واحد را با معدل 14 پاس کند ، مشروط خواهد شد
            </p>
          </div>
        </div>
      </div>
      <div className="custom_hr"></div>
      <div className="row">
        <div className="col">
          <div>
            <p>
              برای مشاهده فرم لطفا روی{" "}
              <Link className="btn btn-sm btn-primary" to={"/form"}>
                این لینک
              </Link>{" "}
              کلیک کنید
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
