import React from "react";
import Container from "../../components/FasilitasComponents/ContainerFasilitas";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

class Fasilitas extends React.Component {
  render() {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Helmet>
            <title>Reksata | Fasilitas</title>
          </Helmet>
          <Container />
        </m.div>
      </LazyMotion>
    );
  }
}

export default Fasilitas;
