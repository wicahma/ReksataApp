import React, { createRef } from "react";
import { FormComponent } from "./FormComponents";
import { CardMenu } from "../MenuComponents/CardMenu";
import { connect } from "react-redux";
import axios from "axios";
import { TbAlertCircle } from "react-icons/tb";
import Notification from "../Notification/Notification";
import { Navigate } from "react-router";

class FormReservasi extends React.Component {
  constructor(props) {
    super(props);
    this.listMenu = createRef();
    this.menuForm = createRef();
    this.state = {
      animateError: false,
      animateFail: false,
      animateSucces: false,
      redirect: null,
      selectedMenu: [],
      formData: {
        nama: "",
        nomor: "",
        jumlahOrang: "",
        tanggal: "",
        mulaiRes: "",
        selesaiRes: "",
        pilihanRuangan: "",
        opsionalRuangan: "",
      },
    };
  }

  handleDeleteList = (data) => {
    data.stopPropagation();
    const dataNew = this.state.selectedMenu.filter(
      (menu, index) => index !== data.target.id
    );
    this.setState({
      selectedMenu: dataNew,
    });
  };

  handleOnChangeMenu = (e) => {
    let value = e.target.value;
    let dataMenu = this.props.dataMenu.find((menu) => menu._id === value);
    const data = this.state.selectedMenu.findIndex(
      (menu) => menu._id === dataMenu._id
    );
    if (data !== -1) {
      let menus = [...this.state.selectedMenu];
      let menu = { ...menus[data] };
      menu.jumlah++;
      menus[data] = menu;
      this.setState({
        selectedMenu: menus,
      });
    } else {
      this.setState({
        selectedMenu: [
          ...this.state.selectedMenu,
          {
            harga: dataMenu.harga,
            img: dataMenu.img,
            jumlah: 1,
            title: dataMenu.title,
            _id: dataMenu._id,
          },
        ],
      });
    }
    e.target.value = "";
  };

  handleOnChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    let newForm = { ...this.state.formData };
    newForm[id] = value;
    // newForm["id"] = `reks${new Date().getTime().toString()}`;
    this.setState({
      formData: newForm,
    });
  };

  handleShowMenu = (e) => {
    e.target.checked
      ? this.menuForm.current.classList.replace("hidden", "grid")
      : this.menuForm.current.classList.replace("grid", "hidden");

    this.setState({
      selectedMenu: [],
    });
  };

  handleSendDataProps = (e) => {
    let newForm = { ...this.state.formData };
    let menuData = this.state.selectedMenu;
    const non = Object.values(this.state.formData)
      .slice(0, 8)
      .every((none) => none !== "");
    newForm["makananID"] = menuData;
    this.setState(
      {
        formData: newForm,
      },
      () => {
        if (non) {
          e.target.classList.toggle("loading");
          axios
            .post(
              `${process.env.REACT_APP_API_URL}reservasi`,
              this.state.formData
            )
            .then((res) => {
              this.setState({
                animateSucces: true,
              });
              setTimeout(() => {
                this.setState({
                  animateSucces: false,
                });
              }, 4000);
              e.target.classList.toggle("loading");
              this.setState({
                redirect: (
                  <Navigate
                    to={`/reservasi/confirm/${res.data.id}`}
                    state={this.state.formData}
                    replace
                  />
                ),
              });
            })
            .catch((err) => {
              this.setState({
                animateFail: true,
              });
              setTimeout(() => {
                this.setState({
                  animateFail: false,
                });
              }, 4000);
              e.target.classList.toggle("loading");
            });
        } else {
          this.setState({
            animateError: true,
          });
          setTimeout(() => {
            this.setState({
              animateError: false,
            });
          }, 2000);
        }
      }
    );
  };

  render() {
    return (
      <div className="sm:w-[700px] container mx-auto">
        <div className=" bg-cultured-500 shadow-xl rounded-xl p-5 mt-10">
          <h3 className="text-xl font-semibold">Syarat dan Ketentuan</h3>
          <ul className="text-sm list-outside pl-6 list-disc">
            <li>
              Seluruh Form yang bertandakan{" "}
              <span className="text-red-500 font-semibold text-xl">*</span>{" "}
              merupakan form yang wajib diisi oleh Reservant.
            </li>
            <li>
              Bagian <span className="font-semibold">pesan makanan</span> adalah
              opsional, kalian bisa mengosongkannya apabila ingin memesan makan
              secara Offline nanti
            </li>
            <li>
              Terdapat tambahan Bill Uang jaminan yang nanti akan ditambahkan
              ketika melakukan proses Pencetakan bill, uang ini nantinya akan
              dikembalikan ketika Reservant sudah selesai menggunakan lokasi
              untuk reservasi
            </li>
          </ul>
        </div>

        <form action="post" className=" mt-10">
          <div
            id="buat-reservasi"
            className="grid grid-cols-4 gap-5 bg-cultured-500 shadow-xl rounded-xl px-5 py-2 pb-5 items-center mb-5"
          >
            <div className="col-span-4 text-xl font-semibold relative top-2">
              <h3>Data Penggunaan</h3>
            </div>
            <FormComponent
              name="nama"
              type="text"
              placeholder=" "
              nameLabel="Nama Reservant"
              mustFilled={true}
              classPlus="col-span-4"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <FormComponent
              name="nomor"
              type="number"
              placeholder=" "
              nameLabel="Nomor telepon"
              mustFilled={true}
              classPlus="sm:col-span-2 col-span-4"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <FormComponent
              name="jumlahOrang"
              type="number"
              placeholder=" "
              nameLabel="Jumlah Orang"
              mustFilled={true}
              classPlus="sm:col-span-2 col-span-2"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <FormComponent
              name="tanggal"
              type="date"
              placeholder=" "
              nameLabel="Tangal Penggunaan"
              min={0}
              mustFilled={true}
              classPlus="col-span-2"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <FormComponent
              name="mulaiRes"
              type="time"
              placeholder=" "
              nameLabel="Jam Mulai"
              mustFilled={true}
              classPlus="sm:col-span-1 col-span-2"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <FormComponent
              name="selesaiRes"
              type="time"
              placeholder=" "
              nameLabel="Jam selesai"
              mustFilled={true}
              classPlus="sm:col-span-1 col-span-2"
              handleOnChange={(e) => this.handleOnChange(e)}
            />

            <div className="col-span-4 text-xl font-semibold relative top-2">
              <h3>Data Ruangan</h3>
            </div>

            <div className="relative col-span-4">
              <select
                required={true}
                name="pilihanRuangan"
                id="pilihanRuangan"
                defaultValue={"none"}
                onChange={(e) => this.handleOnChange(e)}
                className="transition-all  bg-cultured-500 rounded-xl w-full peer focus:ring-rishie-800 focus:border-rishie-800 "
              >
                <option value="none" disabled>
                  none
                </option>

                {this.props.dataSetup.map((setup) => {
                  return (
                    <option key={setup._id} value={setup._id}>
                      {setup.title}
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="pilihanRuangan"
                className="absolute top-50 left-3 -translate-y-1/2 px-1 peer-focus:text-rishie-400 text-xs text-rishie-50 font-semibold bg-cultured-500"
              >
                Pilihan Ruangan
              </label>
            </div>

            <div className="col-span-4 relative">
              <label
                htmlFor="opsionalRuangan"
                className="absolute top-50 left-3 -translate-y-1/2 px-1 peer-focus:text-rishie-400 text-xs text-rishie-50 font-semibold bg-cultured-500"
              >
                Opsional Ruangan
              </label>
              <textarea
                name="opsionalRuangan"
                id="opsionalRuangan"
                onChange={(e) => this.handleOnChange(e)}
                placeholder="Masukkan kebutuhan opsional untuk ruangan anda apabila anda menghendaki."
                className="textarea form-textarea block w-full h-24 min-h-min bg-cultured-500 rounded-xl peer focus:ring-rishie-800 focus:border-rishie-800 "
              ></textarea>
            </div>
            <div className="col-span-4 flex gap-3 items-center bg-rishie-400 rounded-md px-2">
              <FormComponent
                name="selesaiRes"
                type="checkbox"
                placeholder=" "
                nameLabel=""
                mustFilled={false}
                classPlus="w-[16px] aspect-square"
                handleOnChange={(e) => this.handleShowMenu(e)}
              />
              <p className="text-xs font-semibold text-cultured-600">
                Mau pesan makanan sekalian?
              </p>
            </div>
          </div>

          <div
            id="makan-reservasi"
            ref={this.menuForm}
            className="hidden grid-cols-4 gap-5 items-center mb-5 "
          >
            <div className="col-span-4 text-xl px-5 font-semibold relative top-2">
              <h3>Pesan Menu</h3>
            </div>

            <div className="relative col-span-2">
              <select
                required={false}
                name="pilihanMakanan"
                id="makananID"
                defaultValue={"none"}
                onChange={(e) => this.handleOnChangeMenu(e)}
                className="transition-all  bg-cultured-900 rounded-xl w-full peer focus:ring-rishie-800 focus:border-rishie-800 "
              >
                <option value="none" disabled>
                  none
                </option>
                {[
                  ...this.props.dataMenu.filter((data) => data.jenis === true),
                ].map((makanan) => {
                  return (
                    <option key={makanan._id} value={makanan._id}>
                      {makanan.title} - Rp.{makanan.harga}.000
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="pilihanMakanan"
                className="absolute top-50 left-3 -translate-y-1/2 px-1 peer-focus:text-rishie-400 text-xs text-rishie-50 font-semibold bg-cultured-900"
              >
                Pilihan Makanan
              </label>
            </div>

            <div className="relative col-span-2">
              <select
                required={false}
                name="pilihanMinuman"
                id="makananID"
                defaultValue={"none"}
                onChange={(e) => this.handleOnChangeMenu(e)}
                className="transition-all bg-cultured-900 rounded-xl w-full peer focus:ring-rishie-800 focus:border-rishie-800 "
              >
                <option value="none" disabled>
                  none
                </option>
                {[
                  ...this.props.dataMenu.filter((data) => data.jenis === false),
                ].map((minuman) => {
                  return (
                    <option key={minuman._id} value={minuman._id}>
                      {minuman.title} - Rp.{minuman.harga}.000
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="pilihanMinuman"
                className="absolute top-50 left-3 -translate-y-1/2 px-1 peer-focus:text-rishie-400 text-xs text-rishie-50 font-semibold bg-cultured-900"
              >
                Pilihan Minuman
              </label>
            </div>

            <div className="bg-cultured-500  shadow-xl rounded-xl px-5 py-2 pb-5 col-span-4">
              <h4 className=" text-md font-semibold relative top-1">
                Menu Pilihan anda
              </h4>
              <div
                ref={this.listMenu}
                className="border p-4 w-full mt-3 rounded-xl grid gap-3 grid-cols-2"
              >
                <div className="col-span-2">
                  <p className="text-xs font-medium bg-rishie-400 px-3 rounded-md text-white h-min w-max">
                    Click or tap to delete
                  </p>
                </div>
                {this.state.selectedMenu.map((menu, index) => {
                  return (
                    <div
                      key={index}
                      className="sm:col-span-1 col-span-2 hover:bg-errie-300 hover:bg-opacity-20 duration-300 hover:scale-95 transition-all rounded-xl relative after:contents-[''] after:absolute after:w-full after:h-full  after:top-0 after:z-30"
                      id={index}
                      onClick={(e) => this.handleDeleteList(e)}
                    >
                      <CardMenu
                        id={menu.id}
                        jumlah={menu.jumlah}
                        nama={menu.title}
                        harga={menu.harga}
                        img={menu.img}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-5 items-center">
            <div className="col-span-4">
              <p>
                Sudah keisi semua?, ayo buat reservasimu dengan mengklik tombol
                disamping !
              </p>
            </div>
            <div className="col-span-1 justify-self-end">
              <button
                type="button"
                onClick={(e) => this.handleSendDataProps(e)}
                className="btn btn-sm px-7 rounded-full shadow-xl text-white border-none bg-rishie-400 hover:bg-rishie-500 normal-case text-sm font-semibold "
              >
                Lanjut
              </button>
            </div>
          </div>
        </form>
        {this.state.redirect !== null && this.state.redirect}
        <Notification
          animation={this.state.animateError}
          color={"#dc2626"}
          textC={"#fee2e2"}
          icon={<TbAlertCircle />}
          pesan={"Heh ngawor, itu ada data yang belum diisi :)"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataMenu: state.handleAPI.dataMenu,
  dataSetup: state.handleAPI.dataSetup,
});
export default connect(mapStateToProps)(FormReservasi);
