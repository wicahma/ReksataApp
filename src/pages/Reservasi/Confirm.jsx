import { domAnimation, LazyMotion, m } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import Konfirmasi from "../../components/Reservasi/Konfirmasi";
import { TextHeaderComponent } from "../../components/TextHeaderComponent";

class Confirmation extends React.Component {
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
            <title>Reservasi | Confirmation</title>
          </Helmet>
          <TextHeaderComponent
            textPos="text-center"
            subJudul="Verifikasi data kebutuhan anda apakah sesuai atau belum, anda dapat sekalian untuk memilih metode pembayaran disini."
            judul="Confirmation"
            subJudulContPos="justify-center"
          />
          <div className="sm:w-[700px] space-y-3 container mx-auto bg-cultured-500 shadow-xl rounded-xl p-2 md:p-5 mt-10">
            <Konfirmasi/>
          </div>
        </m.div>
      </LazyMotion>
    );
  }
}

export default Confirmation;
