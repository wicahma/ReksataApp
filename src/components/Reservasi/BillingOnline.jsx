import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import { useParams } from "react-router";
import Notification from "../Notification/Notification";
import Bank from "./Bank";

const BillingOnline = (props) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [unfilled, setUnfilled] = useState();
  const forms = useRef();

  var twoDays = new Date("January 3, 70 00:0:00 GMT+00:00").getTime();
  const { id } = useParams();
  const [bill, setBill] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}bill/${id}`)
      .then((res) => {
        setBill(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);

  const handleFileChange = (e) => {
    setFile({
      data: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleDeleteForm = () => {
    forms.current.value = "";
    setFile(undefined);
  };

  const handleSendData = () => {
    if (file === undefined) {
      setUnfilled(true);
      setTimeout(() => {
        setUnfilled(false);
      }, 1500);
      return;
    }
    setLoading(true);
    const formD = new FormData();
    formD.append("file", file.data);
    axios
      .put(`${process.env.REACT_APP_API_URL}bill/${id}`, formD)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
      });
  };

  const timing = (count) =>
    setInterval(() => {
      let now = new Date().getTime();
      let timeleft = count - now;
      let hari = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let jam = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let menit = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let detik = Math.floor((timeleft % (1000 * 60)) / 1000);
      Math.sign(Math.floor(timeleft / (1000 * 60 * 60 * 24))) !== -1 &&
        setDays(hari);

      Math.sign(
        Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ) !== -1 && setHours(jam);
      Math.sign(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))) !==
        -1 && setMinutes(menit);
      Math.sign(Math.floor((timeleft % (1000 * 60)) / 1000)) !== -1 &&
        setSeconds(detik);
    }, 1000);

  useEffect(() => {
    let date = bill !== undefined ? new Date(bill.createdAt).getTime() : null;
    let countdown = date + twoDays;
    timing(countdown);
  }, [bill]);

  return (
    <div className="space-y-6">
      <Notification
        animation={success}
        color={"#16a34a"}
        textC={"#dcfce7"}
        icon={<AiOutlineCheckCircle />}
        pesan={
          "Bukti pembayaran berhasil diupload, silahkan tunggu pengecekan dari admin"
        }
      />
      <Notification
        animation={error}
        color={"#dc2626"}
        textC={"#fee2e2"}
        icon={<TbAlertCircle />}
        pesan={"Waduh error nih, kesalahan dari server inii"}
      />
      <Notification
        animation={unfilled}
        color={"#ea580c"}
        textC={"#fef9c3"}
        icon={<TbAlertCircle />}
        pesan={"Isi terlebih dahulu bukti pembayaran yang ada!"}
      />
      <div className="bg-cultured-500 shadow-xl rounded-xl py-7 w-full text-center">
        <h3 className="text-lg mb-2">Total yang harus dibayar</h3>
        <h2 className="text-5xl text-rishie-500 font-bold">
          {bill === undefined
            ? "Loading"
            : new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(bill.total_harga)}
        </h2>
      </div>
      <div className="bg-cultured-500 shadow-xl rounded-xl flex flex-wrap justify-between p-5 w-full text-center">
        <h3 className="text-xl">Sisa waktu pembayaran</h3>
        <div className="flex gap-4">
          <div>
            <span className="countdown text-2xl">
              <span style={{ "--value": days }}></span>
            </span>
            hari
          </div>
          <div>
            <span className="countdown text-2xl">
              <span style={{ "--value": hours }}></span>
            </span>
            jam
          </div>
          <div>
            <span className="countdown text-2xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            menit
          </div>
          <div>
            <span className="countdown text-2xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            detik
          </div>
        </div>
      </div>
      <div className="bg-cultured-500 shadow-xl rounded-xl p-5 w-full">
        <ul className="mb-5">
          <Bank
            images="https://cdn.contactcenterworld.com/images/company/bank-bri-1200px-logo.png"
            bankName="Bank BRI"
            bankNumber="123-321-123-312"
          />
          <Bank
            images="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png"
            bankName="Bank BNI"
            bankNumber="312-354-123-26-34"
          />
          <Bank
            images="https://procurement.bankmandiri.co.id/Content/NewLanding/img/Logo%20BMRI-03.png"
            bankName="Bank Mandiri"
            bankNumber="123-321-123-312"
          />
        </ul>
        <ul className="ml-5 list-disc list-outside">
          <li>
            Silahkan pilih salah satu metode pembayaran dari keseluruhan metode
            pembayaran yang ada
          </li>
          <li>
            Lakukan transaksi Transfer dan juga pengiriman seperti pada umumnya
            ke Nomor Bank tujuan.
          </li>
          <li>
            Apabila sudah, silahkan konfirmasi pembayaran anda pada tombol
            konfirmasi pembayaran dibawah ini, nantinya kalian akan diarahkan ke
            WhatsApp kedai Aksata, silahkan konfirmasi pembayaran anda ke Admin.
          </li>
          <li>
            Pastikan untuk membayar sebelum batas waktu pembayaran habis,
            dikarenakan jika sudah habis, maka nantinya seluruh pesanan kalian
            akan dihapus dan juga dibatalkan
          </li>
        </ul>
      </div>
      <div className="bg-cultured-500 shadow-xl rounded-xl flex flex-wrap justify-center p-2 w-full text-center items-center">
        <input
          type="file"
          ref={forms}
          onChange={(e) => handleFileChange(e)}
          accept="image/*"
          className="file-input file-input-bordered border-dashed border-rishie-400/10 border-2 hover:border-rishie-400 file-input-sm w-full"
        />
        {file === undefined ? (
          ""
        ) : (
          <div className="w-full max-h-[500px] scrollbar rounded-xl min-h-min mt-5 relative overflow-y-auto">
            <button
              onClick={() => handleDeleteForm()}
              className="btn btn-circle btn-outline absolute top-3 right-3 bg-red-600 text-red-300 hover:rotate-180 duration-500 hover:bg-red-500 hover:text-red-300 border-none hover:border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={file === undefined ? "" : file.preview}
              className="rounded-xl w-full"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleSendData()}
          className={`bg-rishie-400 btn ${
            loading && "loading"
          } border-none px-5 py-1 text-md rounded-2xl hover:bg-rishie-500 active:scale-95 transition-all text-white mx-auto`}
        >
          Kirim Bukti
        </button>
      </div>
    </div>
  );
};

export default BillingOnline;
