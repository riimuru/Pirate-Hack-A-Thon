import React from "react";
import "./styles/Why.css";

const Why = () => {
  return (
    <div className="whyContainer">
      <h1>Why Pirate Cloud</h1>
      <p className="whyP">
        Out outmost value is security; we make sure your data is securely
        stored, and encrypted, so you can do what you love most, coding!
      </p>
      <button className="whyButton">Contact us</button>
      <img
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/14987/pirate-clipart-md.png"
        alt="pirate"
      />
    </div>
  );
};

export default Why;
