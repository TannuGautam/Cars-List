import React, { useRef, useState } from "react";
import circleArrow from "../../public/images/chevron-circled.svg";
import flipedCircle from "../../public/images/fliped-circle.svg";
import Data from "./Data";

function CarList() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="car-main" ref={scrl} onScroll={scrollCheck}>
        <Data />
      </div>
      <div className="pagination">
        {scrollX !== 0 && (
          <img
            className="flip-arrow"
            src={flipedCircle}
            alt=""
            onClick={() => slide(-500)}
          />
        )}
        {!scrolEnd && (
          <img
            className="circle-arrow"
            src={circleArrow}
            alt=""
            // onClick={next}
            // disabled={index === data.length - 1}
            onClick={() => slide(+500)}
          />
        )}
      </div>
    </>
  );
}

export default CarList;
