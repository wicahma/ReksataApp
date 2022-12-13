import React from "react";

export const CardSetup = (props) => {
  return (
    <div className="card w-60 duration-300 transition-all hover:scale-110 z-10 hover:z-20 bg-cultured-500 hover:text-cultured-500 hover:bg-rishie-400 shadow-xl p-4 cursor-default">
      <div className="card-body m-0 pb-2 pt-0">
        <h2 className="text-center text-xl font-medium">{props.namaSetup}</h2>
      </div>
      <div
            className="w-full aspect-square overflow-hidden bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url(https://picsum.photos/1000/700?random=${props.imgSetup})`,
            }}
          ></div>
    </div>
  );
};
