import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand2.png"

const Jumbotron = () => {
const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
     // Use scrollIntoView as a simpler alternative, or adjust your calculation
        element?.scrollIntoView({
            behavior: "smooth",
            block: "start" // Scrolls to the top of the element
        });
}
    return (
<div className="h-[200dvh] overflow-clip">
      <div className="jumbotron-section sticky top-0 wrapper">
      <h2 className="title">New</h2>
      <h2 className="font-bolder">iPhone 16 Pro</h2>
      {/* <img src={Iphone} alt="iPhone 16 Pro" className="logo" /> */}
      <p className="text">Big and Bigger</p>
      <span className="description">
        From $41.62/mo. for 24mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li  onClick={handleLearnMore}>
          <a onClick={handleLearnMore} className="link">
            Learn more
          </a>
        </li>
      </ul>
      <img src={HoldingIphone} alt="iPhone" className="-z-10 iphone-img" />
    </div>
</div>
  );
}

export default Jumbotron