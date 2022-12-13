import React from "react";
import CardFasilitas from "./CardFasilitas";
import { TextHeaderComponent } from "../TextHeaderComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselIndicators from "./CarouselIndicators";

const fasilitas = [
  {
    judul: "Wifi",
    subJudul:
      "Dengan koneksi Wifi yang kencang dan juga cepat, Kedai Aksata menyajikan layanan Internet yang sangat memadai untuk kalian para penggiat Sosial Media, serta kalian yang perkerjaannya selalu terkoneksi dengan Internet",
    imgID: "534",
  },
  {
    judul: "Proyektor",
    subJudul:
      "Dengan koneksi Wifi yang kencang dan juga cepat, Kedai Aksata menyajikan layanan Internet yang sangat memadai untuk kalian para penggiat Sosial Media, serta kalian yang perkerjaannya selalu terkoneksi dengan Internet",
    imgID: "243",
  },
  {
    judul: "Sound",
    subJudul:
      "Dengan koneksi Wifi yang kencang dan juga cepat, Kedai Aksata menyajikan layanan Internet yang sangat memadai untuk kalian para penggiat Sosial Media, serta kalian yang perkerjaannya selalu terkoneksi dengan Internet",
    imgID: "123",
  },
  {
    judul: "Tempat Ibadah",
    subJudul:
      "Dengan koneksi Wifi yang kencang dan juga cepat, Kedai Aksata menyajikan layanan Internet yang sangat memadai untuk kalian para penggiat Sosial Media, serta kalian yang perkerjaannya selalu terkoneksi dengan Internet",
    imgID: "756",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="">
        <TextHeaderComponent
          subJudul={
            "Fasilitas menjadi hal yang penting bagi Kedai Aksata, agar dapat memuaskan pelanggan dengan pelayanan yang tinggi."
          }
          judul={"Fasilitas Aksata"}
          textPos={"text-end"}
          subJudulContPos={"justify-end"}
        />
        <div className=" bg-cultured-400 py-5 pt-0 mt-5 rounded-2xl shadow-2xl overflow-visible z-10">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="overflow-visible pt-5"
            arrows={false}
            deviceType={this.props.deviceType}
            customDot={<CarouselIndicators/>}
            dotListClass="relative top-2 !left-4 w-min h-min"
          >
            {fasilitas.map((data) => {
              return (
                <div key={data.imgID} className="cursor-default  bg-cultured-400 duration-300 lg:hover:shadow-xl transition-all lg:hover:scale-105">
                  <CardFasilitas
                    judul={data.judul}
                    subJudul={data.subJudul}
                    imgID={data.imgID}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Container;
