import React from 'react'

const SoundSection = () => {
  const handleLearnMore2 = (e) => {
    e.preventDefault();
   const element = document.querySelector(".display-section");
        
        // Use scrollIntoView as a simpler alternative, or adjust your calculation
        element?.scrollIntoView({
            behavior: "smooth",
            block: "start" // Scrolls to the top of the element
        });
}
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Retina Display</h2>
          <p className="text">Brilliant</p>
          <span className="description text-3xl font-bold">
            A display that's up to 2x brighter than the sun.
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li className='z-90'>
              <a onClick={handleLearnMore2} className="link z-90">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection