import axios from "axios";
import { domAnimation, LazyMotion, m } from "framer-motion";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Notification from "../../../components/Notification/Notification";
import CheckScheduleComponent from "../../../components/Reservasi/CheckScheduleComponent";
import { FormComponent } from "../../../components/Reservasi/FormComponents";
import { TextHeaderComponent } from "../../../components/TextHeaderComponent";

export const CekJadwal = (props) => {
  let [dateData, setDate] = useState("");
  let [reservationData, setRes] = useState([]);
  let [animateSucces, setSucces] = useState(false);
  let [animateErr, setErr] = useState(false);
  let [animateUnfilled, setUnfilled] = useState(false);

  const handleAlert = (set, time) => {
    set(true);
    setTimeout(() => {
      set(false);
    }, time);
  };

  const handleOnChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearchDate = (data) => {
    dateData.length !== 0
      ? axios
          .get(`${process.env.REACT_APP_API_URL}reservasi?tanggal=${data}`)
          .then((res) => {
            res.data.length !== 0
              ? handleAlert(setSucces, 2000)
              : handleAlert(setErr, 3500);
            setRes(res.data);
          })
          .catch((err) => {
            setRes([]);
            console.log(err);
            handleAlert(setErr, 2000);
          })
      : handleAlert(setUnfilled, 2000);
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="sm:container mx-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          duration: 0.1,
          type: "spring",
          mass: 1,
          damping: 25,
          stiffness: 200,
        }}
      >
        <Helmet>
          <title>Reservasi | Cek</title>
        </Helmet>
        <TextHeaderComponent
          textPos="text-center"
          subJudul="Lakukan pengecekan, terhadap jadwal Reservasi yang sedang terjadi pada waktu tertentu pada Kedai Aksata"
          judul="Check Reservation Schedule"
          subJudulContPos="justify-center"
        />

        <div className="sm:w-[700px] container mx-auto bg-cultured-500 shadow-xl rounded-xl p-5 mt-10">
          <form
            id="cek-jadwal"
            action="get"
            className="flex flex-row items-center gap-4 mb-3"
          >
            <FormComponent
              handleOnChange={(e) => handleOnChange(e)}
              name="tanggal"
              type="date"
              placeholder="22/10/2002"
              nameLabel="Tanggal"
              classPlus="grow"
            />
            <button
              type="button"
              onClick={() => handleSearchDate(dateData)}
              className="bg-rishie-500 grow-0 hover:bg-rishie-400 !h-min transition-all py-2 px-7 rounded-full text-cultured-400"
            >
              Cari
            </button>
          </form>
          <p>
            Sudah menemukan waktu yang tepat? ayo buat Reservasi{" "}
            <span className="font-bold underline hover:text-rishie-600">
              <Link to={"/reservasi"}>disini</Link>
            </span>
            .
          </p>
        </div>
        <div className="sm:w-[700px] container mx-auto space-y-4 mt-7">
          <h3 className="text-xl font-semibold text-center">
            {reservationData.length !== 0
              ? `List Reservasi tanggal ${dateData.slice(-2)}`
              : null}
          </h3>
          {reservationData.map((data, index) => {
            return (
              <CheckScheduleComponent
                key={index}
                jamMulai={data.mulaiRes}
                jamSelesai={data.selesaiRes}
                status={"Booked"}
                statusColor={"red"}
              />
            );
          })}
        </div>
        <Notification
          animation={animateSucces}
          color={"#16a34a"}
          textC={"#dcfce7"}
          icon={<AiOutlineCheckCircle />}
          pesan={"Reservasi berhasil ditemukan!"}
        />
        <Notification
          animation={animateErr}
          color={"#0284c7"}
          textC={"#e0f2fe"}
          icon={<AiOutlineCheckCircle />}
          pesan={`Wah tanggal ${dateData.slice(
            -2
          )} kosong nih, ayo buat reservasi sekarang!`}
        />
        <Notification
          animation={animateUnfilled}
          color={"#ea580c"}
          textC={"#fef9c3"}
          icon={<AiOutlineCheckCircle />}
          pesan={"Isi dulu Tanggal yang mau dicari bwang :)"}
        />
      </m.div>
    </LazyMotion>
  );
};
