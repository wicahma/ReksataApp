import React from "react";
import ContainerSetup from "../../components/SetupComponents/ContainerSetup";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

class SusunanTempat extends React.Component {
  render() {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Helmet>
            <title>Reksata | Susunan Tempat</title>
          </Helmet>
          <ContainerSetup />
        </m.div>
      </LazyMotion>
    );
  }
}

export default SusunanTempat;
