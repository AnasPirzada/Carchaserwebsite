import React from "react";
import "./otherhero.css";
import { Col, Container, Row } from "react-bootstrap";

const OtherHero = (props) => {
  // const imageUrl = "./Rectangle 3099.png";
  return (
    <>
      <div
        className="bgimg d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundImage: `url("${props.img}")` }}
      >
        <h1>
          <b className="text-light text-center" style={{ fontSize: "70px" }}>
            {props.heading}
          </b>
        </h1>
        <p
          className="text-light fw-lighter"
          style={{ fontSize: "25px", fontWeight: "400" }}
        >
          {" "}
          {props.heading1}
        </p>
        <p className=" text-light mobw100 w-50 text-center">{props.heading2}</p>
      </div>
      {/* <Container>
        <Row>
            <Col>
            </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default OtherHero;
