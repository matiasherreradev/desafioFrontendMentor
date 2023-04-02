import { useState } from "react";
import data from "../data.json";

export default function App() {
  const [items] = useState(data);

  return (
    <div classname=" md:items-center  md:h-screen md:max-w-2xl md:mx-auto md:justify-center md:grid-col  ">
      <section className="bg-white md:grid grid-cols-2 md:max-w-2xl md:mx-auto md:my-60">
       <div className= "bg-div shadow-xl grid p-8 text-center  text-white md:rounded-3xl pt-10 md:justify-center md:items-center">
          <h3 className="mb-6 ">Your Result</h3>
          <div className="flex justify-center items-center">
            <p className="bg-circle  w-24 h-24 md:w-40 md:h-40 md:text-6xl flex items-center justify-center gap-1 rounded-full flex-col text-white text-4xl font-bold">
              76 <p className="text-slate-200 text-base font-normal">of 100</p>
            </p>
          </div>
          <h2 className="my-6 text-white text-2xl font-bold">Great</h2>
          <p>
            Estas 65% por encima del promedio de las personas que realizaron
            este test.
          </p>
        </div>
        <div className="p-8 bg-white shadow-xl 
        md:rounded-r-3xl md:items-center md:grid md:gap-4 text-xl">
          <h2 className="text-slate-700 mb-6 text-lg font-bold ">Summary</h2>
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: `${item.color}10` }}
                className="flex items-center justify-between rounded-lg "
              >
                <h3
                  style={{ color: item.color }}
                  className="flex items-center gap-2 "
                >
                  <img src={item.icon} alt={item.category} />
                  {item.category}
                </h3>
                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-slate-700 font-bold">{item.score}</span>
                  /100
                </p>
              </div>
            ))}
          </div>
          <button className="bg-slate-700 rounded-full w-full py-4 mt-4 transition-all duration-200 hover:bg-indigo-600 text-white px-6">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
}
