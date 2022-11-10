import React, { useState } from "react";
import data from "../api/cars.json";
import blueArrow from "../../public/images/chevron-small.svg";

function Data() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      {data.map((cars, index) => {
        return (
          <div
            className={
              "slide"
                ? slideIndex === index + 1
                  ? "slide active-anim"
                  : "slide"
                : "car-list"
            }
          >
            {cars.bodyType}
            <div className="cars-bodytype">
              <h4>{cars.modelName}</h4> {cars.modelType}
            </div>
            <img className="car-img" src={cars.imageUrl} alt=""></img>
            <div className="learn-show-section">
              <div className="learn-section">
                LEARN <img className="img-ls" src={blueArrow} alt="" />{" "}
              </div>
              <div className="shop-section">
                SHOP
                <img className="img-ls" src={blueArrow} alt="" />{" "}
              </div>
            </div>
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({ length: data.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Data;
