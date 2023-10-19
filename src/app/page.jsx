import Cursor from "./component/cursor";
import CardPorto from "./component/cardPorto";
import Navbar from "./component/navbar";
export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="bg-[url('/background.png')] w-full h-screen bg-cover bg-center ">
          <div className="grid grid-cols-2 w-full">
            <div className="pt-44 pl-16 pr-11">
              <p className="text-7xl text-white font-bold">
                WELCOME TO MY WEBSITE
              </p>
              <p className="text-xl text-white font-medium py-5">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum
              </p>
              <a
                href="#porto"
                className="hoverin h-[50px] w-[150px]  flex justify-center items-center px-5 rounded-full duration-100 hover:translate-x-3 bg-gradient-to-b  from-purple-600 to-purple-700 hover:bg-gradient-to-r  text-white hover:text-white font-bold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div id="porto" className="w-full h-screen py-7 ">
          <div className=" flex text-4xl font-bold w-full items-center  justify-center">
            <div></div>
            <p>My Portofolio</p>
            <div></div>
          </div>
          <div className="w-full h-full px-16 py-3 grid grid-cols-3 justify-between gap-16  ">
            <CardPorto />
            <CardPorto />
            <CardPorto />
            <CardPorto />
            <CardPorto />
          </div>
        </div>
      </main>
    </>
  );
}
