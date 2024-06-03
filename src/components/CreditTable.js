import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/cusToggle.css";

const CreditTable = (props) => {
  let data = props;

  return (
    <>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>نام درس</th>
            <th>تعداد واحد</th>
            <th>استاد</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.creditTableInfo[data.creditStatus].map((creditTable) => (
            <tr key={creditTable.id}>
              <td>1</td>
              <td>{creditTable.course}</td>
              <td>{creditTable.courseCredit}</td>
              <td>{creditTable.professor}</td>
              <td>
                <label class="switch">
                  <input
                    onClick={() => data.handleClick(creditTable.id)}
                    type="checkbox"
                    checked={creditTable.isPicked}
                  />
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-sm btn-primary" to={"/print"}>
        ثبت
      </Link>
    </>
  );
};

export default CreditTable;
