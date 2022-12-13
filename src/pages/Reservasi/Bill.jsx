import { domAnimation, LazyMotion, m } from "framer-motion";
import React from "react";

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
          Cari Reservasi
        </m.div>
      </LazyMotion>
    );
  }
}
