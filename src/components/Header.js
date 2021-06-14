import React from "react";
import logo from "../img/Pokemon_logo.png";
import ditto from "../img/ditto.gif";

const header = () => {
  return (
    <div>
      <img className="logo" src={logo} width={"300px"} />
      <p className="instruction">
        Trouvez les tous! <img src={ditto} width={"20px"} />
      </p>
    </div>
  );
};

export default header;
