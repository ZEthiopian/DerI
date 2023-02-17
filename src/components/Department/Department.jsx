import React, { useState } from "react";
import "./Department.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/Far.png",
      title: "Der Farms",
      desc:
        "We have brought forward special enhancements and innovative products to the agriculture industry. ",
      img:
        "./assets/Der Farms.png",
    },
    {
      id: "2",
      icon: "./assets/Gam.png",
      title: "Der Games",
      desc:
        "We are here to re-invent the gaming industry. Our focus here is to create a great environment for entertainment pleasures.",
      img:
        "./assets/Gam.png",
    },
    {
      id: "3",
      icon: "./assets/Auto.png",
      title: "Der Automations",
      desc:
        "This focuses on manufacturing high quality tech products that changes the way services are delivered.",
      img:
        "./assets/Auto.png",
    },
    {
      id: "4",
      icon: "./assets/IT Sol.png",
      title: "Der Solutions",
      desc:
        "We are here to deliver effective & convenient IT solutions to help you advance your business sector.",
      img:
        "./assets/IT Sol.png",
    },
    {
      id: "5",
      icon: "./assets/Veh.png",
      title: "Der Vehicles",
      desc:
        "This is an ongoing project intended to manufacture electric & petroleum vechicles for various transportation means.",
      img:
        "./assets/Auto.png",
    },
    {
      id: "6",
      icon: "./assets/Mach.png",
      title: "Der Vending Machines",
      desc:
        "We are here to deliver effective & smart Digital Vending machines to help you achieve your business goals.",
      img:
        "./assets/Mach.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="./assets/der2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow1.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow1.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
