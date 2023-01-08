import React from "react";

const Table = (props) => {
  return (
    <tr id={props.jumlah * props.harga}>
      <td className="w-12 bg-cultured-400 text-rishie-400 px-2 rounded-xl text-xl font-bold">{props.jumlah}x</td>
      <td className="w-[420px] pl-3 text-base">
        <p className="font-medium">{props.judul}</p>
        <p className="text-sm">(Rp. {props.harga},00-/Item)</p>
      </td>
      <td >Rp. {props.jumlah * props.harga},00-</td>
    </tr>
  );
};

export default Table;
