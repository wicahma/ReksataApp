import React from "react";

const CarouselIndicators = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div
      key={index}
      className={`mx-1 h-6 transition-colors duration-300 aspect-square inline-block active:bg-rishie-400 hover:bg-rishie-600 rounded-full ${
        active ? "bg-rishie-400" : "bg-rishie-700"
      }  border-none`}
      onClick={() => onClick()}
    ></div>
  );
};

export default CarouselIndicators;
