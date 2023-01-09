import React from "react";
import { useLocation } from "react-router";

export const CardMenu = (props) => {
  const location = useLocation();
  return (
    <div className="list-menu" key={props.id}>
      <div
        className={`card card-side ${
          location.pathname == "/reservasi"
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
        >
          {location.pathname === "/reservasi" && (
            <div className="h-full flex justify-center items-center w-full bg-black/[.50]">
              <p className="font-bold text-2xl text-white">
                x{props.jumlah !== undefined ? props.jumlah : `0`}
              </p>
            </div>
          )}
        </div>
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
