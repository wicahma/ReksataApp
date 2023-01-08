import React, { Fragment } from "react";
import { TextHeaderComponent } from "../TextHeaderComponent";
import { ListMenu } from "./ListMenu";
import { ImArrowDown2 } from "react-icons/im";
import { LazyMotion, domAnimation, m } from "framer-motion";
import axios from "axios";
import { connect } from "react-redux";
import { fetchAPI, getDataMenu } from "../../Store/Actions/handleAPIAction";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMakanan: Array(),
      dataMinuman: Array(),
      tampilMakanan: "block",
      tampilMinuman: "block",
    };
  }

  handleCategories = (selected) => {
    switch (selected) {
      case "Makanan":
        this.setState({
          tampilMakanan: "block",
          tampilMinuman: "hidden",
        });
        console.log("ini makanan");
        break;
      case "Minuman":
        this.setState({
          tampilMakanan: "hidden",
          tampilMinuman: "block",
        });
        console.log("ini minuman");
        break;
      default:
        this.setState({
          tampilMakanan: "block",
          tampilMinuman: "block",
        });
        console.log("ini semua");
        break;
    }
  };

  handleInputDataMenu = (menu) => {
    const makanan = [...menu.filter((data) => data.jenis === true)];
    const minuman = [...menu.filter((data) => data.jenis === false)];
    this.setState({
      dataMakanan: makanan,
      dataMinuman: minuman,
    });
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}menus`)
    //   .then((res) => {
    //     console.log(res);
    //     const makanan = [...res.data.filter((data) => data.jenis === true)];
    //     const minuman = [...res.data.filter((data) => data.jenis === false)];
    //     console.log(minuman);
    //     console.log(makanan);
    //     this.setState({
    //       dataMakanan: makanan,
    //       dataMinuman: minuman,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  componentDidMount() {
    console.log("komponent mount");
    this.handleInputDataMenu(this.props.dataMenu);
  }

  render() {
    // console.group("Data Hasil");
    // console.log("Data Makanan", this.state.dataMakanan);
    // console.log("Data Minuman", this.state.dataMinuman);
    // console.groupEnd();
    return (
      <Fragment>
        <div className="w-full flex flex-col sm:flex-row">
          <TextHeaderComponent
            subJudul={
              "Kedai Aksata menyediakan beragam menu makanan dengan citarasa khas tanpa melupakan harga yang murah untuk kantong."
            }
            judul={"Menu Aksata"}
            textPos={"text-start"}
            subJudulContPos={"justify-start"}
          />
          <LazyMotion features={domAnimation}>
            <m.div
              className="grow sm:text-start text-center sm:w-[150px]"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                mass: 1,
                damping: 20,
                stiffness: 150,
              }}
            >
              <form className="w-[100%]">
                <label className="label">
                  <span className="label-text">Kategori</span>
                </label>
                <select
                  onChange={(e) => this.handleCategories(e.target.value)}
                  className="select select-bordered select-sm w-full py-0 focus:border-rishie-400 focus:ring-rishie-400"
                >
                  <option defaultValue={true}>Semua</option>
                  <option>Makanan</option>
                  <option>Minuman</option>
                </select>
              </form>
            </m.div>
          </LazyMotion>
        </div>

        <div className="flex justify-center flex-wrap gap-5 mt-5">
          <div className={this.state.tampilMakanan}>
            <ListMenu judul={"Makanan"} dataMenu={this.state.dataMakanan} />
          </div>
          <div className={this.state.tampilMinuman}>
            <ListMenu judul={"Minuman"} dataMenu={this.state.dataMinuman} />
          </div>
        </div>
        <LazyMotion features={domAnimation}>
          <m.button
            className="btn mt-10 btn-sm border-none rounded-full mx-auto normal-case font-normal text-cultured-400 px-4 bg-rishie-400 hover:bg-rishie-500 flex gap-1"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              damping: 20,
              stiffness: 150,
            }}
          >
            Menu Lainnya
            <ImArrowDown2 />
          </m.button>
        </LazyMotion>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // dataMak: state.mainStore.dataMak,
  // dataMin: state.mainStore.dataMin,
  dataMenu: state.handleAPI.dataMenu,
});

export default connect(mapStateToProps)(Container);
