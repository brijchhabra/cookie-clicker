import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [multiple, setMultiple] = useState(1);
  const [autoM, setAutoM] = useState(0);

  const updateNumber = () => {
    setClicks(clicks + 1 * multiple);
  };
  const updateMultiple = () => {
    if (clicks >= 5 * multiple) {
      setMultiple(multiple + 1);
      setClicks(clicks - 5 * multiple);
    }
  };

  const auto = () => {
    if (clicks >= 50 * autoM + 50) {
      setAutoM(autoM + 1);
      setClicks(clicks - 50 * autoM - 50);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks((before) => before + 1 * autoM);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoM]);

  return (
    <>
      <div className="flex bg-blue-200 h-screen">
        <div className="h-[100vh] w-[40vw] ">
          <div className="flex flex-col items-center border-4 bg-sky-400 border-sky-600 rounded-md h-[100vh]">
            <button className=" h-[50%] w-[50%]" onClick={updateNumber}>
              <img
                className="animate-spin"
                src="../src/assets/cookie.png"
                alt="cookie"
              />
            </button>
            <div className="border-sky-600 border-t-4 h-[50vh] w-[40vw] items-center justify-center flex flex-col">
              <h1 className="text-9xl text-white absolute">${clicks}</h1>
              <h1 className="text-7xl mt-[30vh] text-white">clicks</h1>
            </div>
          </div>
        </div>

        <div className="flex absolute h-[100vh] w-[60vw] right-0 items-center space-between">
          <button
            className="btn ml-[2.5vw]"
            onClick={updateMultiple}
          >
            <h1 className="text-white text-5xl mb-[2.5vh]">
              Costs ${5 * multiple}
            </h1>
            <h2 className="text-3xl ">Multiplies clicks</h2>
            <h3 className="">current multiplier is {multiple} per click</h3>
          </button>

          <button
            className="btn absolute right-[2.5vw]"
            onClick={auto}
          >
            <h1 className="text-white text-5xl mb-[2.5vh] ">Costs ${50 * autoM + 50}</h1>
            <h2 className="text-3xl ">Auto Clicks</h2>
            <h3 className="">current multiplier is {autoM} per second</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
