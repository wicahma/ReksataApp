import { LazyMotion, m, domAnimation } from "framer-motion";
import React from "react";

const variants = {
  down: { opacity: 1, y: 0, x: "-50%" },
  up: { opacity: 0, x: "-50%" },
};

const Notification = (props) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={variants}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, type: "spring", damping: 10 }}
        animate={props.animation ? "down" : "up"}
        className={`alert z-30 fixed top-20 sm:w-[700px] left-1/2 sm:py-3 rounded-xl px-1 sm:px-3 py-[5px] w-[95%] sm:text-md text-sm overflow-hidden shadow-xl`}
        style={{ backgroundColor: props.color, color: props.textC}}
      >
        <div className="text-2xl">
          {props.icon}
          <span className="w-full text-sm">
            {props.pesan}
          </span>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default Notification;
