import React from 'react'

const CarouselChild = (props) => {
    return (
        <div>
            <div
              className="carousel-item h-[400px] w-full overflow-hidden bg-cover bg-center "
              style={{
                backgroundImage: `url(https://picsum.photos/1000/700?random=${props.imgID})`,
              }}
            ></div>
            <div className="card-body">
            <h2 className="card-title text-center">
              {props.judul}
            </h2>
            <p>
              {props.subjudul}
            </p>
            </div>
          </div>
    )
}

export default CarouselChild