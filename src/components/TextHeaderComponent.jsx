import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const containerJudulVariants = {
  awal: { y: -30, opacity: 0 },
  akhir: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
      type: "spring",
      mass: 1.5,
      damping: 25,
      stiffness: 500,
    },
  },
};

const textContainer = {
  awal: { y: -30, opacity: 0 },
  akhir: {
    y: 0,
    opacity: 1,
  },
};

export const TextHeaderComponent = (props) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="w-full mb-10 sm:mb-0
        "
        variants={containerJudulVariants}
        initial="awal"
        animate="akhir"
      >
        <div className="w-full">
          <m.h1
            className={`text-3xl sm:text-5xl font-semibold ${props.textPos}`}
            variants={textContainer}
          >
            {props.judul}
          </m.h1>
        </div>
        <div className={`w-full flex ${props.subJudulContPos}`}>
          <m.p
            className={`text-xl sm:text-2xl ${props.textPos} font-serif mt-2 leading-5 sm:leading-7 sm:mt-5 lg:w-4/6 w-10/12`}
            variants={textContainer}
          >
            {props.subJudul}
          </m.p>
        </div>
      </m.div>
    </LazyMotion>
  );
};
