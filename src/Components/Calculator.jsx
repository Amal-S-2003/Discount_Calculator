import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Calculator() {
  const [price, setPrice] = useState("");
  const [percentage, setPercentage] = useState("");
  const [sale, setSale] = useState("");
  const [dPrice, setDPrice] = useState("");
  function handleData(e) {
    const { name, value } = e;
    if (name == "price") {
      setPrice(value);
    } else {
      setPercentage(value);
    }
  }
  function reset() {
    setPrice("");
    setPercentage("");
    setSale("");
    setDPrice("");
  }

  function calculateDiscount() {
    // Discounted Price=Original Price−(Original Price×Discount Percentage)
    console.log(price);
    console.log(percentage);

    let discountedPrice = price - (price * percentage) / 100;
    console.log(discountedPrice);

    setSale(discountedPrice);
    setDPrice(price - discountedPrice);
  }

  return (
    <>
      <div className="d-flex container mt-5 justify-content-between">
        <div className="col-md-5 col-sm-12 mt-5 box d-flex  justify-content-center flex-column">
          <form action="">
            <FloatingLabel
              controlId="floatingInput"
              label="Actual Price"
              className="mb-3 w-100"
            >
              <Form.Control
                type="text"
                placeholder="Actual Price"
                value={price}
                name="price"
                onChange={(e) => handleData(e.target)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Discount percentage"
              className="mb-3 w-100"
            >
              <Form.Control
                type="text"
                placeholder="Enter Discount percentage"
                value={percentage}
                name="percentage"
                onChange={(e) => handleData(e.target)}
              />
            </FloatingLabel>
            <Button
              className="btn btn-outline-dark bg-light me-4 text-dark"
              onClick={reset}
            >
              Reset
            </Button>
            <Button variant="dark" onClick={calculateDiscount}>
              Calculate
            </Button>
            <h4 className="text-success  mt-3">
              Sales Price:
              <span className="text-dark fs-3 fw-bold"> {sale}</span>{" "}
            </h4>
            <h4 className="text-danger  mt-3">
              Discounted Price:
              <span className="text-dark fs-3 fw-bold"> {dPrice}</span>{" "}
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default Calculator;
