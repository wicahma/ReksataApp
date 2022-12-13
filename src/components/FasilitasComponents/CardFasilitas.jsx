import React from "react";
import { Fragment } from "react";

const CarouselChild = (props) => {
  return (
    <Fragment>
      <figure className="px-5 pt-5">
        <img
          src={`https://picsum.photos/1000/700?random=${props.imgID}`}
          alt="Gambar Fasilitas"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.judul}</h2>
        <p>{props.subJudul}</p>
      </div>
    </Fragment>
  );
};

export default CarouselChild;
