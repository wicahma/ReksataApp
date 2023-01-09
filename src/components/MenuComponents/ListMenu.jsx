import React, { Fragment } from "react";
import { CardMenu } from "./CardMenu";
import { m, LazyMotion, domAnimation} from "framer-motion";

const containerCardMenuVariants = {
  awal: {
    y: -40,
    opacity: 0,
  },
  muncul: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      type: "spring",
      mass: 1,
      damping: 20,
      stiffness: 150,
    },
  },
};

const cardMenuVariants = {
  awal: { y: -40, opacity: 0 },
  muncul: {
    y: 0,
    opacity: 1,
  },
};

export const ListMenu = (props) => {
  return (
    <Fragment>
      <LazyMotion features={domAnimation}>
        <m.h3
          className="text-center font-medium text-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            type: "spring",
          }}
        >
          {props.judul}
        </m.h3>
        <m.div
          className="flex flex-col gap-5"
          variants={containerCardMenuVariants}
          initial="awal"
          animate="muncul"
          key={props.dataMenu.length}
        >
          {props.dataMenu.map((data) => {
            return (
              <m.div key={data._id} variants={cardMenuVariants}>
                <CardMenu
                  id={data._id}
                  judul={data.jenis === true ? "Makanan" : "Minuman"}
                  nama={data.title}
                  harga={data.harga}
                  deskripsi={data.deskripsi}
                  img={data.img}
                />
              </m.div>
            );
          })}
        </m.div>
      </LazyMotion>
    </Fragment>
  );
};
