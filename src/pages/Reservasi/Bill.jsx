import { domAnimation, LazyMotion, m } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router";
import BillingOffline from "../../components/Reservasi/BillingOffline";
import BillingOnline from "../../components/Reservasi/BillingOnline";
import { TextHeaderComponent } from "../../components/TextHeaderComponent";

export class Bill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <title>Reservasi | Billing</title>
          </Helmet>
          <TextHeaderComponent
            textPos="text-center"
            subJudul="Silahkan bayar kebutuhan reservasi anda sesuai dengan yang telah tertera pada kolom dibawah dan sesuaikan dengan metode pembayaran yang anda pilih."
            judul="Billing"
            subJudulContPos="justify-center"
          />
          <div className="sm:w-[700px] container mx-auto mt-10">
            <Outlet />
          </div>
        </m.div>
      </LazyMotion>
    );
  }
}
