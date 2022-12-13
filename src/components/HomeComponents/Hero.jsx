import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "./CarouselHome";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="h-full overflow-hidden sm:p-10 gap-10 flex justify-between rounded-2xl shadow-2xl bg-cultured-500">
          <aside className="shrink p-6 sm:p-0 flex items-center justify-center">
            <div className="sm:w-3/4">
              <h2 className="text-center text-5xl font-bold mb-10">
                Kenapa Aksata?
              </h2>
              <p className="text-justify font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim adLorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim adLoremet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad
              </p>
              <div className="flex justify-between mt-10 text-cultured-400">
                <a
                  href="#"
                  className="btn btn-sm px-5 rounded-full border-none bg-rishie-400 hover:bg-rishie-500 normal-case text-xs font-semibold "
                >
                  Hubungi kami?
                </a>
                <a
                  href="#"
                  className="btn btn-sm px-5 rounded-full border-none bg-rishie-400 hover:bg-rishie-500 normal-case text-xs font-semibold "
                >
                  Reservasi <BsArrowRight className="ml-2 text-base" />
                </a>
              </div>
            </div>
          </aside>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Hero;
