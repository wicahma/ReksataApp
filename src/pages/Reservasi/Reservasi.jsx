import { domAnimation, LazyMotion, m } from "framer-motion";
import React from "react";
import FormReservasi  from "../../components/Reservasi/FormReservasi";
import { TextHeaderComponent } from "../../components/TextHeaderComponent";
import { Helmet } from "react-helmet-async";

export default class Reservasi extends React.Component {
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
            <title>Reksata | Reservasi</title>
          </Helmet>
          <TextHeaderComponent
            subJudul={
              "Isi data kebutuhan reservasi anda secara lengkap pada form dibawah ini."
            }
            judul={"Reservation"}
            textPos={"text-center"}
            subJudulContPos={"justify-center"}
          />
          <FormReservasi />
        </m.div>
      </LazyMotion>
    );
  }
}
