import React from "react";

const SearchCard = (props) => {
  return (
    <div className="grid grid-cols-4 drop-shadow-2xl rounded-xl bg-transparent">
      <div className="col-span-3 flex  bg-cultured-600 rounded-xl">
        <div className="flex items-center rounded-tl-xl rounded-bl-xl px-3 text-rishie-800 text-xl font-medium  bg-rishie-400">
          <p
            className="rotate-180"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            RES-{props.id.slice(-4)}
          </p>
        </div>
        <div className="py-3 border-l-2 grow px-3 border-dashed border-l-rishie-300">
          <h3 className="text-2xl font-semibold ">{props.nama}</h3>
          <div className="text-sm font-normal my-2">
            <p className="">
              {props.jamMulai}
              <span>-</span>
              {props.jamSelesai} <span>|</span> {props.tanggal}
            </p>
            <p>{props.orang} Orang</p>
          </div>
          <div className="w-full py-2 px-3 mb-3 rounded-md text-white text-xl font-semibold bg-rishie-400">
            {" "}
            <p>Rp. 12.450,00-</p>
          </div>

          <div className="handler-badge flex gap-2">
            <div className="badge border-red-500 bg-red-600 text-white">
              Belum Bayar
            </div>
            <div className="badge border-green-500 bg-green-600 text-white">
              Penggunaan
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-cultured-600 rounded-xl  p-3">
        <p className="bg-rishie-400 text-center py-1 rounded-full text-white font-semibold">
          REK-{props.id.slice(-2)}
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default SearchCard;
