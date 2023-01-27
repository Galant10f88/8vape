import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
//import { CgProfile } from 'react-icons/cg'
import 'tw-elements';


const Slider = () => {
    return <div
  id="carouselExampleCrossfade"
  className="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src="https://cdn11.bigcommerce.com/s-dl52lpq/images/stencil/original/carousel/1369/1369x425-JH.jpg?c=2&imbypass=on"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://cdn11.bigcommerce.com/s-dl52lpq/images/stencil/original/carousel/1367/1369x425_1.png?c=2&imbypass=on"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://cdn11.bigcommerce.com/s-dl52lpq/images/stencil/original/carousel/1374/EcigBanner-111422-Zovoo_1.jpg?c=2&imbypass=on"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://cdn11.bigcommerce.com/s-dl52lpq/images/stencil/original/carousel/1361/eightcigbanner-121222-utoobbar__87821.jpg?c=2&imbypass=on"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span className="bg-gray-800 rounded-md carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span className="bg-gray-800 rounded-md carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

}

export default Slider