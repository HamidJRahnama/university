import React from "react";

const Print = ({ creditTableInfo, studentInfo }) => {
  let newCreditTableInfo = creditTableInfo.filter((creditTable) =>
    creditTable.isPicked === true ? creditTable : null
  );

  return (
    <>
      <div className="row">
        <h4 className="custom_h4">مشخصات دانشجو</h4>
        <div className="col-6">
          <h6>
            نام: <span>{studentInfo.name}</span>
          </h6>
          <h6>
            نام خانوادگی: <span>{studentInfo.family}</span>
          </h6>
        </div>
        <div className="col-6">
          <h6>
            شماره دانشجویی: <span>{studentInfo.studentNumber}</span>
          </h6>
          <h6>
            مقطع: <span>{studentInfo.credit}</span>
          </h6>
        </div>
      </div>

      <div className="custom_hr"></div>
      <div className="row">
        <h4 className="custom_h4">دروس انتخاب شده</h4>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>نام درس</th>
              <th>تعداد واحد</th>
              <th>استاد</th>
            </tr>
          </thead>

          <tbody>
            {newCreditTableInfo.map((item, index) =>
              item.isPicked ? (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.course}</td>
                  <td>{item.courseCredit}</td>
                  <td>{item.professor}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Print;
