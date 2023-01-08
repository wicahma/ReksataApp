import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Bank from "./Bank";

const BillingOnline = (props) => {
  var [days, setDays] = useState();
  var [hours, setHours] = useState();
  var [minutes, setMinutes] = useState();
  var [seconds, setSeconds] = useState();

  var twoDays = new Date("January 3, 70 00:0:00 GMT+00:00").getTime();
  const { id } = useParams();
  const [bill, setBill] = useState();
  useEffect(() => {
    console.log(id);
    axios
      .get(`${process.env.REACT_APP_API_URL}bill/${id}`)
      .then((res) => setBill(res.data))
      .catch((err) => console.log(err));
  }, []);

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
    </div>
  );
};

export default BillingOnline;
