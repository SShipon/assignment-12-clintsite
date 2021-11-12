import React from "react";
import Typewriter from 'typewriter-effect';
import './HomeBanner.css'
const HomeBanner = () => {
  return (
    <div className="banner-img">
 <div className="banner-text">
<p><Typewriter

  onInit={(typewriter) => {
    typewriter.typeString('<h3>Bayerische Motoren Werke in short BMW which is the most popular</h3><br/> <h6>luxury car produce company. This German four wheeler manufacturer</h6><br/> <p>giant is only have one competitor and which is Mercedes-Benz. </p>')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>     
                </p>
            </div>
        </div>
  );
};

export default HomeBanner;
