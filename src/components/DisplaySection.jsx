import React from 'react'

const DisplaySection = () => {
  function handleLearnMore(e) {
    e.preventDefault();
    const element = document.querySelector(".jumbotron-section");
        
        // Use scrollIntoView as a simpler alternative, or adjust your calculation
        element?.scrollIntoView({
            // behavior: "smooth",
            block: "start" // Scrolls to the top of the element
        });    
  }
  return (
    <div>
      <div className="display-section wrapper">
        <h2 className="title">Many Colors</h2>
        <p className="text">Absolutely. Gorgeous.</p>
        <span className="description">
          Color is infused throughout the back glass, creating five stunning
          finishes.
        </span>
        <button className="button">Try me!</button>
        <button onClick={handleLearnMore} className="back-button">
          TOP
        </button>
      </div>
    </div>
  );
}

export default DisplaySection