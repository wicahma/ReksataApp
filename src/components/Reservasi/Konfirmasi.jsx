import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router";
import Notification from "../Notification/Notification";
import Table from "./Table";

const usePesanan = (id) => {
  const [dataPesanan, setPesanan] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}reservasi/${id}`)
      .then((res) => {
        setPesanan(res.data);
        console.log(res.data.makananID);
        // handleAlert(animateSucces, 1500);
        // e.target.classList.toggle("loading");
      })
      .catch((err) => {
        console.log(err);
        // handleAlert(animateFail, 1500);
        // e.target.classList.toggle("loading");
      });
  }, [id]);
  return dataPesanan;
};

const Konfirmasi = (props) => {
  const params = useParams();
  const tabelMakanan = useRef();
  const dataPesanan = usePesanan(params.id_res);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(dataPesanan);
  const [method, setMethod] = useState();
  const [total, setTotal] = useState(0);
  const [animateSucces, setSucces] = useState(false);
  const [animateErr, setErr] = useState(false);
  const [animateUnfilled, setUnfilled] = useState(false);
  // console.log("ini adalah lokasi dari data yang ada ", params);

  useEffect(() => {
    const makanan = tabelMakanan.current.childNodes;
    let jumlah = 0;
    for (const [key, value] of Object.entries(makanan)) {
      jumlah += Number(value.id);
    }
    setTotal(jumlah);
  }, [dataPesanan]);

  const handleAlert = (set, time) => {
    set(true);
    setTimeout(() => {
      set(false);
    }, time);
  };

  const handleSendData = (data, e) => {
    console.log(params.id_res);
    e.target.classList.toggle("loading");
    axios
      .post(`${process.env.REACT_APP_API_URL}bill/${params.id_res}`, {
        total_harga: total,
        jaminan: 100000,
        s_pembayaran: "Belum Bayar",
        s_reservasi: "Booked",
        metode_pembayaran: data,
      })
      .then((res) => {
        console.log(res);
        handleAlert(setSucces, 1500);
        e.target.classList.toggle("loading");
        method === "Online"
          ? navigate(`/pembayaran/online/${res.data._id}`)
          : navigate(`/pembayaran/offline/${res.data._id}`);
      })
      .catch((err) => {
        console.log(err);
        handleAlert(setErr, 1500);
        e.target.classList.toggle("loading");
      });
  };

  const handleCheckData = (data, e) => {
    data !== undefined
      ? handleSendData(data, e)
      : handleAlert(setUnfilled, 2000);
  };

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">
          {dataPesanan !== undefined ? dataPesanan._id : "Loading..."}
        </h1>
        <h3 className="text-xl">
          Silahkan verifikasi data data dibawah ini terlebih dahulu
        </h3>
        <div>
          <h5 className="text-lg font-semibold">Atas nama</h5>
          <p>{dataPesanan !== undefined ? dataPesanan.nama : "Loading..."}</p>
        </div>
        <p>
          Ingin melakukan Reservasi di Kedai Aksata pada tanggal{" "}
          {dataPesanan !== undefined ? dataPesanan.tanggal : "Loading..."}, di
          jam {dataPesanan !== undefined ? dataPesanan.mulaiRes : "Loading..."}{" "}
          hingga{" "}
          {dataPesanan !== undefined ? dataPesanan.selesaiRes : "Loading..."}.
          Jumlah orang yang berpartisipasi adalah{" "}
          {dataPesanan !== undefined ? dataPesanan.jumlahOrang : "Loading..."}{" "}
          Orang,{" "}
          {dataPesanan !== undefined
            ? `serta Kebutuhan Opsional berupa "${dataPesanan.opsionalRuangan}"`
            : "Loading..."}
        </p>
      </div>
      <div>
        <h5 className="text-lg font-semibold">
          Berikut adalah total bill kamu:
        </h5>
        <div className="bg-rishie-400 rounded-xl p-3 text-white">
          <h5 className="font-medium underline text-lg">Makanan</h5>
          <table className="w-full border-separate border-spacing-y-2">
            <tbody className="w-[650px]" ref={tabelMakanan}>
              {dataPesanan !== undefined
                ? dataPesanan.makananID.map((data) => {
                    return (
                      <Table
                        jumlah={data.jumlah}
                        judul={data.title}
                        harga={data.harga * 1000}
                      />
                    );
                  })
                : "Loading..."}
            </tbody>
          </table>
          <h5 className="font-medium underline text-lg mt-4">Reservasi</h5>
          <div className="">
            <div className="flex justify-between">
              <p>Uang jaminan</p> <p className="w-[170px]">Rp. 100000,00-</p>
            </div>
            <div className="flex justify-between">
              <p>Sewa Ruangan</p>
              <p className="w-[170px]">Rp. 50000,00-</p>
            </div>
            <div className="flex justify-between">
              <p>Jasa</p>
              <p className="w-[170px]">Rp. 10000,00-</p>
            </div>
            <p></p>
          </div>
          <div className="font-semibold text-lg flex justify-between mt-4">
            <h3>Total</h3> <h3 className="w-[170px]">Rp. {total},00-</h3>
          </div>
        </div>
      </div>
      <div className="bg-rishie-400 rounded-xl text-white p-3">
        <p className="text-center">Silahkan pilih metode pembayaran</p>
        <fieldset
          id="pilihan-pembayaran"
          onChange={(e) => setMethod(e.target.value)}
          className="grid md:grid-cols-2 grid-cols-1"
        >
          <div className="col-span-1 flex gap-2">
            <input
              type="radio"
              id="Online"
              name="pilihan-pembayaran"
              value={"Online"}
            />
            <label htmlFor="Online">
              <h4 className="font-semibold">Online</h4>
              <p className="font-light">
                Pebayaran secara langsung melalui barista pada kedai aksata
              </p>
            </label>
          </div>
          <div className="col-span-1 flex gap-2">
            <input
              type="radio"
              id="Offline"
              name="pilihan-pembayaran"
              value={"Offline"}
            />
            <label htmlFor="Offline">
              <h4 className="font-semibold">Offline</h4>
              <p className="font-light">
                Pembayaran melalui transfer antar Bank atau melalui Saldo
                Digital
              </p>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="w-full flex justify-center ">
        <label
          htmlFor="selesaikan-pesanan"
          className="btn border-none rounded-full bg-rishie-400 hover:bg-rishie-500 text-white normal-case font-normal text-lg"
        >
          Selesaikan Pesanan
        </label>
      </div>
      <input type="checkbox" id="selesaikan-pesanan" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-cultured-400 shadow-xl">
          <label
            htmlFor="selesaikan-pesanan"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl">Konfirmasi</h3>
          <p className="py-4">
            Apakah anda sudah yakin bahwa data data yang ada sudah benar?
          </p>
          <div className="modal-action">
            <label
              onClick={(e) => handleCheckData(method, e)}
              className="btn border-none rounded-full bg-rishie-400 hover:bg-rishie-500 text-white normal-case font-normal text-lg"
            >
              Ya, Selesaikan pesanan
            </label>
          </div>
        </div>
      </div>
      <Notification
        animation={animateSucces}
        color={"#16a34a"}
        textC={"#dcfce7"}
        icon={<AiOutlineCheckCircle />}
        pesan={
          "Reservasi Berhasil dibuat!, Anda akan diarahkan ke halaman billing"
        }
      />
      <Notification
        animation={animateErr}
        color={"#dc2626"}
        textC={"#fee2e2"}
        icon={<TbAlertCircle />}
        pesan={"Waduh error nih, coba buat reservasi lagi nanti yaa"}
      />
      <Notification
        animation={animateUnfilled}
        color={"#ea580c"}
        textC={"#fef9c3"}
        icon={<TbAlertCircle />}
        pesan={"Isi terlebih dahulu pilihan metode pembayaran yang tersedia !"}
      />
    </>
  );
};

export default Konfirmasi;
