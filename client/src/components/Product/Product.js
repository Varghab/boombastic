import React, { useState } from "react";
import product1 from "../../assets/Product/product1.jpg";
import product2 from "../../assets/Product/product2.jpg";
import product3 from "../../assets/Product/product3.jpg";
import product4 from "../../assets/Product/product4.jpg";
import Thumbnail from "../UI/Thumbnail";
import {AiOutlineTrophy, AiOutlineShopping} from 'react-icons/ai'


const Products = [
  {
    id: 1,
    product: product1,
  },
  {
    id: 2,
    product: product2,
  },
  {
    id: 3,
    product: product3,
  },
  {
    id: 4,
    product: product4,
  },

  
];

const Product = () => {
  const [currentImage, setCurrentImage] = useState(product1);
  const clickHandler = (img) => {
    setCurrentImage(img);
  };
  return (
    <div className="pb-8 px-8 pt-4 md:pt-8 ">
      <section className="flex border border-neutral-200 flex-col md:flex-row max-w-[100rem] md:max-w-[90rem] w-full mx-auto gap-8 bg-white p-8 rounded-lg shadow-lg shadow-neutral-400/40 ">
        <div className="flex flex-col w-full md:w-1/2 gap-2">
          <div className="w-full h-96 ">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={currentImage}
            ></img>
          </div>
          <div className="flex-shrink-0 md:flex-shrink">
            <div className="flex md:flex-wrap gap-2 items-center justify-center overflow-x-auto scrollbar-hide py-4">
              {Products.map((product) => (
                <Thumbnail
                  clickHandle={() => clickHandler(product.product)}
                  key={product.id}
                  src={product.product}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <div className="flex justify-between flex-col md:flex-row gap-2 md:gap-0">
              <h1 className="font-primary font-bold uppercase text-3xl md:Text-4xl">
                Airdopes 161
              </h1>
              <div>
                <button className="px-4 py-2 rounded-full bg-neutral-800 text-neutral-100">
                  TWS
                </button>
              </div>
            </div>
            <p className="font-secondary text-md md:text-lg mt-4">
              Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5
              Water & Sweat Resistance, IWP Technology, Type C Interface
            </p>
            <hr className="mt-6 border border-neutral-300"></hr>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <p className="text-xl md:text-2xl font-bold">Rs 1,499</p>
                <p className="text-neutral-400 text-sm md:text-md line-through">
                  MRP: ₹ 2,999
                </p>
              </div>
              <div>
                <p>4.8 Stars (2345)</p>
              </div>
            </div>
            <section className="mt-4">
              <p><span className="font-semibold font-primary">Choose your color</span> : <span className="font-secondary">Green</span></p>
              <div className="flex gap-2 mt-2">
                <div className="rounded-full w-8 h-8 bg-green-800"></div>
                <div className="rounded-full w-8 h-8 bg-blue-800"></div>
                <div className="rounded-full w-8 h-8 bg-yellow-800"></div>
                <div className="rounded-full w-8 h-8 bg-red-800"></div>
                <div className="rounded-full w-8 h-8 bg-pink-800"></div>
              </div>
            </section>
            <section className="mt-4">
              <div className="w-72 rounded-lg p-4 bg-sky-100/70">
                  <h1 className="flex items-center gap-2"><AiOutlineTrophy /> <span>Product of the Month</span></h1>
                  <p>Choosen by 40000+ Users</p>
              </div>
            </section>
            <section className="mt-6">
              <h1 className="font-semibold font-primary">Check delivery</h1>
              <div className="flex items-center rounded-xl mt-2 w-full max-w-sm">
                <input placeholder="Enter Your Pincode" className="px-3 w-full outline-none rounded-s-xl py-3 border border-neutral-300"></input>
                <button className="px-6 py-3 bg-[#12b985] text-white rounded-e-xl">Check</button>
              </div>
            </section>
            <section className="mt-6">
              <div className="w-full max-w-sm text-lg">
                <button className="px-6 w-full justify-center py-2 flex items-center rounded-full bg-neutral-800 text-white gap-1"><AiOutlineShopping/> Add to Cart  </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
