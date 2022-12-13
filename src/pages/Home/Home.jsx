import React from "react";
import Hero from "../../components/HomeComponents/Hero";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

class Home extends React.Component {
  render() {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
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
            <title>Reksata | Home</title>
          </Helmet>
          <Hero />
        </m.div>
      </LazyMotion>
    );
  }
}

export default Home;
