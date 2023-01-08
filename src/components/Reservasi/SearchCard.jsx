import React from "react";
import { Link } from "react-router-dom";

const SearchCard = (props) => {
  return (
    <div className="grid grid-cols-4 drop-shadow-2xl rounded-xl bg-transparent">
      <div className="md:col-span-3 col-span-4 flex  bg-cultured-600 rounded-xl">
        <div className="flex items-center rounded-tl-xl rounded-bl-xl px-2 md:px-3 text-rishie-800 text-lg md:text-xl font-medium  bg-rishie-400">
          <p
            className="rotate-180"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            RES-{props.id.slice(-4)}
          </p>
        </div>
        <div className="py-1 md:py-3 border-l-2 grow px-3 border-dashed border-l-rishie-300">
          <h3 className="md:text-2xl text-xl font-semibold ">{props.nama}</h3>
          <div className="text-xs md:text-md font-normal mb-2 md:my-2">
            <p className="">
              {props.jamMulai}
              <span>-</span>
              {props.jamSelesai} <span>|</span> {props.tanggal}
            </p>
            <p>{props.orang} Orang</p>
          </div>
          <div className="w-full md:py-2 py-1 px-2 md:px-3 mb-1 md:mb-3 rounded-md text-white text-lg md:text-xl font-semibold bg-rishie-400">
            <p>Rp. 12.450,00-</p>
          </div>

          <div className="handler-badge md:mb-0 mb-1 flex gap-2">
            <div className="badge !text-sm border-red-500 bg-red-600 text-white">
              Belum Bayar
            </div>
            <div className="badge border-green-500 bg-green-600 text-white">
              Penggunaan
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:block hidden bg-cultured-600 rounded-xl  p-3">
        <p className="bg-rishie-400 text-center py-1 rounded-full text-white font-semibold">
          REK-{props.id.slice(-2)}
        </p>
        <div className="flex items-end justify-center h-[80%]"><Link className="bg-rishie-400 hover:bg-rishie-600 transition-colors px-4 py-1 text-white  rounded-full" to={'/'}>Detail</Link></div>
      </div>
    </div>
  );
};

export default SearchCard;
