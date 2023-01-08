import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import Notification from "../Notification/Notification";

const Bank = (props) => {
  let [animateSucces, setSucces] = useState(false);
  const handleAlert = (set, time) => {
    set(true);
    setTimeout(() => {
      set(false);
    }, time);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(props.bankNumber);
    handleAlert(setSucces, 2000);
  };
  return (
    <>
      <Notification
        animation={animateSucces}
        color={"#16a34a"}
        textC={"#dcfce7"}
        icon={<MdContentCopy />}
        pesan={"Nomor Bank berhasil dicopy!"}
      />
      <li className="flex w-full justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-20 h-[60px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${props.images})` }}
          />
          <h3 className="text-2xl font-medium">{props.bankName}</h3>
        </div>
        <div className="flex items-center text-xl gap-3">
          <p className="font-semibold">{props.bankNumber}</p>
          <button
            type="button"
            onClick={() => handleCopy()}
            className="btn border-none !p-0 text-xl"
          >
            <MdContentCopy />
          </button>
        </div>
      </li>
    </>
  );
};

export default Bank;
