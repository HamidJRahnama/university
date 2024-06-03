import React, { useState } from "react";
import StudyMore from "./StudyMore";
import DismissalMessage from "./DismissalMessage";

const Form = ({ handleClick }) => {
  const studentInitialState = {
    name: "",
    family: "",
    studentNumber: "",
  };
  const studentStatusInitialState = {
    educationalState: "کاردانی",
    semester: "",
    credit: "",
    grade: "",
  };
  const [student, setStudent] = useState(studentInitialState);
  const [studentStatus, setStudentStatus] = useState(studentStatusInitialState);
  const [dismissal, setDismissal] = useState(false);
  const [isStudyMore, setIsStudyMore] = useState(false);
  console.log(studentStatus);
  const handleStudent = (text, input) => {
    setStudent((prevState) => ({ ...prevState, [input]: text.target.value }));
  };
  const handleStudentStatus = (text, input) => {
    setStudentStatus((prevState) => ({
      ...prevState,
      [input]: text.target.value,
    }));
  };

  let setEducationalState = (educationalState) => {
    handleClick(educationalState, studentStatus.educationalState, student);
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    switch (studentStatus.educationalState) {
      case "کاردانی":
        if (studentStatus.semester > 6) {
          setDismissal(!dismissal);
        } else {
          if (studentStatus.credit >= 72 && studentStatus.grade >= 10) {
            console.log("[Form.js] ==> pass");
          } else {
            setEducationalState("associiateDegree");
            setIsStudyMore(true);
          }
        }
        break;
      case "کارشناسی":
        if (studentStatus.semester > 8) {
          setDismissal(!dismissal);
        } else {
          if (studentStatus.credit >= 68 && studentStatus.grade >= 12) {
            console.log("[Form.js] ==> pass");
          } else {
            setEducationalState("undergraduate");
            setIsStudyMore(true);
          }
        }
        break;
      case "دکترا":
        if (studentStatus.semester > 6) {
          setDismissal(!dismissal);
        } else {
          if (studentStatus.credit >= 32 && studentStatus.grade >= 14) {
            console.log("[Form.js] ==> pass");
          } else {
            setEducationalState("phd");
            setIsStudyMore(true);
          }
        }
        break;

      default:
        break;
    }
  };
  return (
    <>
      {dismissal ? (
        <>
          <DismissalMessage handleClick={() => setDismissal(false)} />
        </>
      ) : (
        <>
          {isStudyMore ? (
            <>
              <StudyMore handleClick={() => setIsStudyMore(false)} />
            </>
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col">
                  <div className="Headeram">
                    <h4>فرم دریافت وضعیت تحصیلی</h4>
                    <p>برای دریافت وضعیت تحصیلی خود فرم را با دقت پر کنید</p>
                  </div>
                </div>
              </div>
              <div className="custom_hr"></div>

              <div className=" row g-1 my-1">
                <h5>اطلاعات دانشجو</h5>
                <div className="col ">
                  <input
                    onChange={(text) => handleStudent(text, "name")}
                    type="text"
                    className="form-control "
                    id="name"
                    required={true}
                  />
                  <label htmlFor="name">
                    <small>نام</small>
                  </label>
                </div>
                <div className="col">
                  <input
                    onChange={(text) => handleStudent(text, "family")}
                    type="text"
                    className="form-control"
                    id="family"
                    required={true}
                  />
                  <label htmlFor="family">
                    <small>نام خانوادگی</small>
                  </label>
                </div>
                <div className="col">
                  <input
                    onChange={(text) =>
                      handleStudent(text, "studentNumber", "number")
                    }
                    type="text"
                    className="form-control"
                    id="studentNumber"
                    required={true}
                    maxLength={16}
                    minLength={16}
                  />
                  <label htmlFor="studentNumber">
                    <small>شماره دانشجویی</small>
                  </label>
                </div>
              </div>
              <div className="custom_hr"></div>
              <div className="row gy-4 gx-1">
                <h5>اطلاعات تحصیلی دانشجو</h5>

                <div className="col-6">
                  <select
                    onChange={(text) =>
                      handleStudentStatus(text, "educationalState")
                    }
                    id="educationalState"
                    className="form-control"
                  >
                    <option defaultValue={"کاردانی"}>کاردانی</option>
                    <option>کارشناسی</option>
                    <option>دکترا</option>
                  </select>
                  <label>
                    <small>مقطع</small>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    onChange={(text) => handleStudentStatus(text, "semester")}
                    type="text"
                    className="form-control"
                    id="semester"
                    required
                    maxLength={1}
                  />
                  <label htmlFor="semester">
                    <small>ترم</small>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    onChange={(text) => handleStudentStatus(text, "credit")}
                    type="text"
                    className="form-control"
                    id="credit"
                    required
                    maxLength={2}
                  />
                  <label htmlFor="credit">
                    <small>واحد</small>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    onChange={(text) => handleStudentStatus(text, "grade")}
                    type="text"
                    className="form-control"
                    id="grade"
                    required
                    maxLength={2}
                  />
                  <label htmlFor="grade">
                    <small>معدل</small>
                  </label>
                </div>
              </div>
              <div className="custom_hr"></div>
              <div className="row my-1 d-flex justify-content-center">
                <div className="col-4  ">
                  <button className="form-control btn btn-primary ">
                    ارسال
                  </button>
                </div>
              </div>
            </form>
          )}
        </>
      )}
    </>
  );
};

export default Form;
