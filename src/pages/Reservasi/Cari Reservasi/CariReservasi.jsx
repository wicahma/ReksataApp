import axios from "axios";
import { m, domAnimation, LazyMotion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Notification from "../../../components/Notification/Notification";
import { FormComponent } from "../../../components/Reservasi/FormComponents";
import SearchCard from "../../../components/Reservasi/SearchCard";
import { TextHeaderComponent } from "../../../components/TextHeaderComponent";

export const CariReservasi = (props) => {
  let [idRes, setId] = useState("");
  let [res, setRes] = useState([]);
  let [animateSucces, setSucces] = useState(false);
  let [animateErr, setErr] = useState(false);
  let [animateUnfilled, setUnfilled] = useState(false);

  const handleSearchRes = (e) => {
    setId(e.target.value);
  };

  const handleAlert = (set, time) => {
    set(true);
    setTimeout(() => {
      set(false);
    }, time);
  };

  const handleSearchID = () => {
    if (idRes.length !== 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}reservasi/${idRes}`)
        .then((res) => {
          console.log(res);
          res.data ? console.log("data ada") : console.log("data tidak ada");
          setRes(res.data);
          handleAlert(setSucces, 2000);
        })
        .catch((err) => {
          console.log(err);
          setRes([]);
          handleAlert(setErr, 2000);
        });
    } else {
      handleAlert(setUnfilled, 2000);
      setRes([]);
    }
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
          <title>Reservasi | Cari</title>
        </Helmet>
        <TextHeaderComponent
          textPos="text-center"
          subJudul="Lakukan pengecekan, perubahan data dan juga pembatalan reservasi pada halaman ini"
          judul="Reservation Search"
          subJudulContPos="justify-center"
        />
        <div className="sm:w-[700px] container mx-auto bg-cultured-500 shadow-xl rounded-xl p-5 mt-10">
          <form
            id="cari-reservasi"
            action="get"
            className="flex flex-row items-center gap-4 mb-3"
          >
            <FormComponent
              name="searchID"
              type="search"
              placeholder="ex: RES-201192321"
              nameLabel="ID Reservasi"
              classPlus="grow"
              handleOnChange={(e) => handleSearchRes(e)}
            />
            <button
              type="button"
              onClick={() => handleSearchID()}
              className="bg-rishie-500 grow-0 hover:bg-rishie-400 !h-min transition-all py-2 px-7 rounded-full text-cultured-400"
            >
              Cari
            </button>
          </form>
          <p>
            Belum membuat Reservasi? ayo buat reservasi{" "}
            <span className="font-bold underline hover:text-rishie-600">
              <Link to={"/reservasi"}>disini</Link>
            </span>
            .
          </p>
        </div>

        <div className="sm:w-[700px] container mx-auto mt-5">
          {res.length !== 0 && (
            <SearchCard
              nama={res.nama}
              id={res._id}
              jamMulai={res.mulaiRes}
              jamSelesai={res.selesaiRes}
              tanggal={res.tanggal}
              orang={res.jumlahOrang}
            />
          )}
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
          color={"#dc2626"}
          textC={"#fee2e2"}
          icon={<AiOutlineCheckCircle />}
          pesan={"Data Tidak ditemukan, pastikan ID reservasi anda benar!"}
        />
        <Notification
          animation={animateUnfilled}
          color={"#ea580c"}
          textC={"#fef9c3"}
          icon={<AiOutlineCheckCircle />}
          pesan={"Isi dulu ID yang mau dicari bwang :)"}
        />
      </m.div>
    </LazyMotion>
  );
};
