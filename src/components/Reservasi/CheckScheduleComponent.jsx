import React from "react";

const CheckScheduleComponent = (props) => {
  return (
    <div className="grid grid-cols-3 drop-shadow-2xl">
      <div className="col-span-2 p-5 rounded-tl-xl rounded-bl-xl bg-cultured-800 text-center">
        <p>{props.jamMulai} - {props.jamSelesai}</p>
      </div>
      <div className={`col-span-1 p-5 rounded-tr-xl rounded-br-xl bg-cultured-400 text-center text-${props.statusColor}-500 `}>
        <p>{props.status}</p>
      </div>
    </div>
  );
}

export default CheckScheduleComponent;
