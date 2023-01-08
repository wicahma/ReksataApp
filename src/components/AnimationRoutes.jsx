import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import SusunanTempat from "../pages/SusunanTempat/SusunanTempat";
import Fasilitas from "../pages/Fasilitas/Fasilitas";
import Reservasi from "../pages/Reservasi/Reservasi";
import { CariReservasi } from "../pages/Reservasi/Cari Reservasi/CariReservasi";
import { CekJadwal } from "../pages/Reservasi/Cek Jadwal/CekJadwal";
import { Bill } from "../pages/Reservasi/Bill";
import { connect } from "react-redux";
import {
  fetchAPI,
  getDataMenu,
  getDataSetup,
} from "../Store/Actions/handleAPIAction";
import Confirmation from "../pages/Reservasi/Confirm";
import BillingOffline from "./Reservasi/BillingOffline";
import BillingOnline from "./Reservasi/BillingOnline";

function AnimationRoutes(props) {
  const checkerData = (data, path, method) => {
    if (data.length > 0) {
      console.log("data sudah ditambahkan !");
    } else {
      console.log("data sedang ditambahkan !");
      props.dispatch(fetchAPI(path, method));
    }
  };

  checkerData(props.dataMenu, "menus", getDataMenu);
  checkerData(props.dataSetup, "setups", getDataSetup);

  const location = useLocation();
  return (
    <div className="px-3 sm:px-10 pb-20 pt-[4.7rem] sm:pt-20 bg-cultured-800 h-max">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/home"
            element={<Home />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/menu-aksata"
            element={<Menu />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/susunan-tempat"
            element={<SusunanTempat />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/fasilitas"
            element={<Fasilitas />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/reservasi"
            element={<Reservasi />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/reservasi/cari-reservasi"
            element={<CariReservasi />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/reservasi/cek-jadwal"
            element={<CekJadwal />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/reservasi/confirm/:id_res"
            element={<Confirmation />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          />
          <Route
            path="/pembayaran"
            element={<Bill />}
            errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
          >
            <Route
              path="offline/:id"
              element={<BillingOffline />}
              errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
            />
            <Route
              path="online/:id"
              element={<BillingOnline />}
              errorElement={"Keanya ada yang salah sama ketikanmu lah 🤣"}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
const mapStateToProps = (state) => ({
  dataMenu: state.handleAPI.dataMenu,
  dataSetup: state.handleAPI.dataSetup,
});

export default connect(mapStateToProps)(AnimationRoutes);
