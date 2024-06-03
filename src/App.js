import "./styles/global.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import CreditTable from "./components/CreditTable";
import Print from "./components/Print";

function App() {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    family: "",
    studentNumber: "",
    credit: "",
  });

  const [creditStatus, setCreditStatus] = useState("");

  const creditTableInitialState = {
    associiateDegree: [
      {
        id: 1,
        course: "کارگاه کامپیوتر2",
        courseCredit: "1",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 2,
        course: "زبان خارجی عمومی",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 3,
        course: "کارورزی1",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 4,
        course: "اندیشه اسلامی2",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 5,
        course: "دانش خانواده و جمعیت",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 6,
        course: "زبان های برنامه نویسی بصری",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 7,
        course: "برنامه نویسی شی گرا",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 8,
        course: "ریاضی علم کامپیوتر",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
    ],
    undergraduate: [
      {
        id: 1,
        course: "جبر خطی",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 2,
        course: "زیاضی علم کامپیوتر 2",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 3,
        course: "سکوهای برنامه نویسی",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 4,
        course: "اندیشه اسلامی",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 5,
        course: "SEO",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 6,
        course: "مبانی سیستم عامل",
        courseCredit: "2",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 7,
        course: "ورزش 1",
        courseCredit: "1",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 8,
        course: "UX",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
    ],
    phd: [
      {
        id: 1,
        course: "درس1 دکترا",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 2,
        course: "درس1 دکترا",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
      {
        id: 3,
        course: "درس1 دکترا",
        courseCredit: "3",
        professor: "یخچالی",
        isPicked: false,
      },
    ],
  };
  const [creditTableInfo, setCreditTableInfo] = useState(
    creditTableInitialState
  );
  let getcreditStatus = (educationalState, maghta, student) => {
    setStudentInfo({
      name: student.name,
      family: student.family,
      studentNumber: student.studentNumber,
      credit: maghta,
    });
    setCreditStatus(educationalState);
  };

  let demofunmy = (id) => {
    let newItem = creditTableInfo[creditStatus].find((item) => item.id === id);
    newItem.isPicked = !newItem.isPicked;
    setCreditTableInfo((prevState) => {
      return {
        ...prevState,
        creditStatus: { ...creditStatus, ...newItem },
      };
    });
  };
  return (
    <div className="demo1">
      <div className=" container-fluid bg-white shadow-sm">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
      </div>
      <br />
      <div className="bg-danger cus_mudal"></div>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-8">
            <div className="bg-white shadow-lg p-3 mb-5  rounded ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/form"
                  element={
                    <Form
                      handleClick={(educationalState, maghta, student) =>
                        getcreditStatus(educationalState, maghta, student)
                      }
                    />
                  }
                />
                <Route
                  path="/credittable"
                  element={
                    <CreditTable
                      handleClick={(id) => demofunmy(id)}
                      studentInfo={studentInfo}
                      creditTableInfo={creditTableInfo}
                      creditStatus={creditStatus}
                    />
                  }
                />
                <Route
                  path="/print"
                  element={
                    <Print
                      creditTableInfo={creditTableInfo[creditStatus]}
                      studentInfo={studentInfo}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
