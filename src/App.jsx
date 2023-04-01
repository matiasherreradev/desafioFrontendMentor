import { useState } from "react";
import data from "../data.json";

export default function App() {
  const [items] = useState(data);

  return (
    <section>
      <div className="bg-indigo-600 p-8 text-center text-white rounded-b-3xl ">
        <h3 className="mb-6 ">Your Result</h3>
        <div className="flex justify-center items-center">
          <p className="bg-indigo-700  w-24 h-24 flex items-center justify-center gap-1 rounded-full flex-col text-white text-3xl font-bold">
            76   <p className="text-slate-200 text-base font-normal">of 100</p>
          </p>
       
        </div>
        <h2 className="my-6">Great</h2>
        <p>
          Estas 65% por encima del promedio de las personas que realizaron este
          test.
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>
        <div>
          {items.map((item, index) => (
            <div key={index} style={{ backgroundColor: `${item.color}10` }}
            className="flex items-center gap-2 ">
              <h3 style={{ color: item.color }}>
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>
              <p>
                <span>{item.score}</span>/100
              </p>
            </div>
          ))}
        </div>
        <button>Continue</button>
        {items.length} items
      </div>
    </section>
  );
}
