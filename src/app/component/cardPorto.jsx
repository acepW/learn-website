import React from "react";

function CardPorto() {
  return (
    <div className=" h-[400px] bg-[url('/porto1.jpg')] bg-cover bg-center hover:translate-y-[-10px] duration-200   ">
      <div className="w-full h-full opacity-0 hover:opacity-75 bg-purple-700 rounded-xl flex flex-col justify-center items-center p-10">
        <p className="text-white font-bold text-xl ">Mobile App For Gojek</p>
        <p className="text-white font-semibold text-xs line-clamp-3 pt-4">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <div className="pt-7">
          <button className="hoverin h-[50px]  flex justify-center items-center px-5 rounded-full bg-pink-600 text-white hover:text-white font-bold hover:translate-y-[-6px] duration-100">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPorto;
