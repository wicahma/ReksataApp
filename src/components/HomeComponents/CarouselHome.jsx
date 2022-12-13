import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import CarouselChild from "./CarouselChild";

class CarouselHome extends React.Component {
  constructor(props) {
    super(props);
  }

  arrowPrev = (clickHandler = clickHandler(), hasPrev = true, label) => {
    return (
      <button
        onClick={clickHandler}
        className="hover:text-cultured-400 h-28 bg-errie-600/25 rounded-full text-cultured-600 transition-all active:scale-75  text-3xl absolute top-[25%]  left-3 z-10 "
      >
        <BsCaretLeftFill />
      </button>
    );
  };

  arrowNext = (clickHandler = clickHandler(), hasNext = true, label) => {
    return (
      <button
        onClick={clickHandler}
        className="hover:text-cultured-400 h-28 bg-errie-600/25 rounded-full text-cultured-600 transition-all active:scale-75  text-3xl absolute top-[25%]  right-3 "
      >
        <BsCaretRightFill />
      </button>
    );
  };

  carouselIndicators = (clickHandler = clickHandler(), isSelected, index) => {
    return (
      <div
        key={index}
        className={`mx-1 h-6 transition-colors duration-300 aspect-square inline-block active:bg-rishie-400 hover:bg-rishie-600 rounded-full ${
          isSelected === true ? "bg-rishie-400" : "bg-rishie-700"
        }  border-none`}
        onClick={clickHandler}
      ></div>
    );
  };

  render() {
    return (
      <div className="card w-96 shrink-0 bg-cultured-400 shadow-xl h-full hidden sm:hidden lg:block">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showIndicators={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={this.arrowPrev}
          renderArrowNext={this.arrowNext}
          renderIndicator={this.carouselIndicators}
          className="h-[700px]"
        >
          <CarouselChild
            imgID={"1"}
            judul={"Bingung mau nyari tempat ngumpul?"}
            subjudul={
              "Udah nyari kemana mana, tapi tempatnya gaa cocok buat kamu yang pengen Fokus & menikmati suasana Alami."
            }
          />
          <CarouselChild
            imgID={"2"}
            judul={"Reservasi offline ribed dan gaa praktis?"}
            subjudul={
              "harus bayar iniah, bayar itulah, susah banget ya keanya, belum lagi gabisa custom lokasinya keagimana."
            }
          />
          <CarouselChild
            imgID={"3"}
            judul={"Susah ya, nyari Cafe dengan suasana tenang?"}
            subjudul={
              "Pas di cafe ini, ternyata Live Musicnya bikin gafokus. Pas di cafe itu, tempatnya malah berisik."
            }
          />
          <CarouselChild
            imgID={"4"}
            judul={"Tenang!, sekarang ada Reksata"}
            subjudul={
              "Solusi bagi kamu yang ingin menikmati suasana cafe dengan nuansa jadul, sembari menikmati keindahan persawahan yang tiada tara"
            }
          />
        </Carousel>
      </div>
    );
  }
}

export default CarouselHome;
