import React, { Fragment } from "react";
import { TextHeaderComponent } from "../TextHeaderComponent";
import { CardSetup } from "./CardSetup";
import { m, LazyMotion, domAnimation } from "framer-motion";
import axios from "axios";
import { connect } from "react-redux";

const containerSetupVariants = {
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

const setupVariants = {
  awal: { y: -40, opacity: 0 },
  muncul: {
    y: 0,
    opacity: 1,
  },
};

class ContainerSetup extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="w-full flex flex-row ">
          <TextHeaderComponent
            subJudul={
              "Menyajikan berbagai setup tempat untuk kebutuhan Reservasi dari Kedai Aksata."
            }
            judul={"Setup Tempat Aksata"}
            textPos={"text-center"}
            subJudulContPos={"justify-center"}
          />
        </div>
        <LazyMotion features={domAnimation}>
          <m.div
            className="flex flex-wrap justify-center sm:mx-auto mt-5 sm:justify-between w-100 md:w-[80%]  gap-4"
            variants={containerSetupVariants}
            initial="awal"
            animate="muncul"
          >
            {this.props.dataSetup.map((data) => {
              return (
                <m.div key={data._id} variants={setupVariants}>
                  <CardSetup namaSetup={data.title} imgSetup={data.img} />
                </m.div>
              );
            })}
          </m.div>
        </LazyMotion>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  dataSetup: state.handleAPI.dataSetup,
});

export default connect(mapStateToProps)(ContainerSetup);
