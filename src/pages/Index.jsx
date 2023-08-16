import React from "react";
import '../styles/home.css';
import Hero from '../assets/hero-image.jpg';

function Index() {
  return (
    <div>
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
        </div>
        <div>
          <img className="hero-image" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
