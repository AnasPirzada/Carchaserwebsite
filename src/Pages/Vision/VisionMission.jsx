import React from "react";
import { Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <Col md={12} className=" mt-5">
          <h6 style={{ color: "#1985D2" }}>Our Vision</h6>
          <h2 className="fw-bold">Vision and mission</h2>
          <p>
            <b>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </b>
          </p>
          <p>
            <b>
              Consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32.{" "}
            </b>
          </p>
        </Col>
        <Col md={12} className=" text-center ">
          <img
            src="./image 104.png"
            alt="mobile"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
      </div>
    </div>
  );
};

export default VisionMission;
