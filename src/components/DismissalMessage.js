import React from "react";

const DismissalMessage = ({ handleClick }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h3>متاسفاده شما به محدودیت ترم اخراج شدید</h3>
          </div>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            بازگشت
          </button>
        </div>
      </div>
    </>
  );
};

export default DismissalMessage;
