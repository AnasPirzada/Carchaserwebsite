import React from "react";

const DetailCounter = () => {
  return (
    <div className="counterbg my-5">
      <h1 className="text-center fw-bold text-primary">
        Your word's will show here
      </h1>
      <h3 className="text-center">
        You get a great offer, with none of the work.
      </h3>
      <div className="container w-75 mt-4">
        <div className="row justify-content-center">
          <div
            className="col-sm mb-4 mobborder"
            style={{
              border: "none",
              borderRight: "2px dashed #1985D2",
            }}
          >
            <div className="p-3 text-center ">
              <h2
                className="fw-bold"
                style={{
                  color: "#1985D2",
                }}
              >
                300s
              </h2>
              <h3 className="mt-5">of dealerships compete for your car</h3>
            </div>
          </div>
          <div
            className="col-sm mb-4 mobborder"
            style={{
              borderRight: "2px dashed #1985D2",
            }}
          >
            <div className="p-3 text-center" style={{}}>
              <h2
                className="fw-bold"
                style={{
                  color: "#1985D2",
                }}
              >
                2,500+
              </h2>
              <h3 className="mt-5">Happy customers</h3>
            </div>
          </div>
          <div className="col-sm mb-4 ">
            <div className="p-3 text-center ">
              <h2
                className="fw-bold"
                style={{
                  color: "#1985D2",
                }}
              >
                72hrs
              </h2>
              <h3 className="mt-5">Til it's gone, paid,& sold!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCounter;
