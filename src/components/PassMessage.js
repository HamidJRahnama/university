import React from "react";

import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PassMessage = ({ isShow, student, studentStatus, handleClose }) => {
  return (
    <>
      <Modal show={isShow} onHide={handleClose} centered>
        <div className=" p-1">
          <Modal.Title>شما پاس شدید</Modal.Title>
          <div className="custom_hr"></div>
          <Modal.Body>
            <div>
              <p>
                با احترام، به اطلاع می‌رساند که <strong>{student.name}</strong>{" "}
                <strong>{student.family}</strong>، دارنده شماره دانشجویی{" "}
                <strong>{student.studentNumber}</strong>، با موفقیت دوره تحصیلی
                خود را در مقطع <strong>{studentStatus.educationalState}</strong>{" "}
                به پایان رسانده و مدرک خود را اخذ نموده است.{" "}
              </p>
              <p>ضمن تبریک و تهنیت، آرزوی موفقیت در مراحل بعدی را داریم.</p>
            </div>
          </Modal.Body>
          <Modal.Footer className=" d-flex justify-content-lg-start">
            <Row>
              <Col>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleClose(false)}
                >
                  بستن
                </Button>
                <Link className="btn btn-sm btn-primary mx-1" to={"/"}>
                  بازگشت به خانه
                </Link>
              </Col>
            </Row>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default PassMessage;
