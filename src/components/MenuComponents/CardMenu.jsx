import React from "react";

export const CardMenu = (props) => {
  return (
    <div className="list-menu" key={props.id}>
      <div
        className={`card card-side ${
          props.page == "regis"
            ? ""
            : "hover:scale-110 hover:z-20 hover:bg-rishie-400 hover:text-cultured-500 p-4 bg-cultured-500"
        }   z-10 cursor-default duration-300 transition-all shadow-xl overflow-hidden p-2 gap-5 ${
          props.judul === "Minuman" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className="w-[100px] aspect-square overflow-hidden bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url(https://picsum.photos/1000/700?random=${props.img})`,
          }}
        ></div>
        <div
          className={`w-[100%] sm:w-[300px] ${
            props.judul === "Minuman" ? "text-left" : "text-right"
          }`}
        >
          <h2 className="text-lg font-medium">{props.nama}</h2>
          <p className="">Rp. {props.harga}.000-</p>
          <p className="text-xs">{props.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};
