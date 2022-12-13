import React from "react";
import Container from "../../components/MenuComponents/ContainerMenu";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

class Menu extends React.Component {
  render() {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Helmet>
            <title>Reksata | Menu Aksata</title>
          </Helmet>
          <Container />
        </m.div>
      </LazyMotion>
    );
  }
}

export default Menu;
