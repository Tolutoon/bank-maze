import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Nike from '../assets/Nike - png 0.png';
import ASOS from '../assets/ASOS - png 0.png';
import Hero from "../assets/hero-image.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hero-box">
          <div className="hero-text">
            <h1>Meet the credit card of the future</h1>
          </div>
          <div className="sec-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci mollis augue tortor
              duis odio purus. Quisque id fermentum velit suspendisse nisi
              egestas.
            </p>
          </div>
          <div>
            <button className="hero-btn">
              <div className="btn-text">
              Get The App
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ph:arrow-up-light">
                  <path
                    id="Vector"
                    d="M28.4113 25.9473C28.2314 25.9568 28.0551 25.8946 27.9212 25.7742C27.7872 25.6538 27.7064 25.4852 27.6967 25.3053L27.167 15.4261L14.9399 29.0365C14.8194 29.1706 14.6506 29.2514 14.4706 29.261C14.2906 29.2707 14.1141 29.2084 13.98 29.0879C13.8459 28.9674 13.7652 28.7986 13.7555 28.6186C13.7459 28.4386 13.8082 28.2622 13.9286 28.1281L26.1557 14.5177L16.2765 15.0458C16.1004 15.049 15.9299 14.9837 15.801 14.8637C15.6721 14.7437 15.5948 14.5784 15.5854 14.4025C15.576 14.2267 15.6352 14.054 15.7505 13.921C15.8659 13.7879 16.0284 13.7048 16.2038 13.6892L27.722 13.0725C27.9019 13.063 28.0782 13.1253 28.2122 13.2457C28.3462 13.366 28.4269 13.5347 28.4366 13.7145L29.0533 25.2327C29.0628 25.4126 29.0005 25.5889 28.8802 25.7228C28.7598 25.8568 28.5912 25.9376 28.4113 25.9473Z"
                    fill="#333333"
                  />
                </g>
              </svg>
              </div>
            </button>
          </div>
        </div>
        <div>
          <img className="hero-image" src={Hero} alt="" />
        </div>
      </div>
      <div className="trsted-logos">
        <img src={Nike} alt=""/>
        <img src={ASOS} alt=""/>
      </div>
    </>
  );
}

export default Home;
