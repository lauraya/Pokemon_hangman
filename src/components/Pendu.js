import React from "react";

const Pendu = ({ wrong }) => {
  const wrongs = wrong.length;
  console.log("wrongs ", wrongs);
  return (
    <svg height="350" width="350">
      <g id="body">
        {wrongs > 1 && (
          <g id="head">
            <circle
              cx="200"
              cy="80"
              r="20"
              stroke="black"
              strokeWidth="4"
              fill="white"
            />
            <g id="rEyes">
              {wrongs > 2 && <circle cx="193" cy="80" r="4" />}
              {wrongs > 3 && <circle cx="207" cy="80" r="4" />}
            </g>
            {/*wrongs > 4 && (
              <g id="xEyes" className="hide">
                <line x1="190" y1="78" x2="196" y2="84" />
                <line x1="204" y1="78" x2="210" y2="84" />
                <line x1="190" y1="84" x2="196" y2="78" />
                <line x1="204" y1="84" x2="210" y2="78" />
              </g>
            )*/}
          </g>
        )}
        {wrongs > 4 && <line x1="200" y1="100" x2="200" y2="150" />}
        {wrongs > 5 && <line id="armL" x1="200" y1="120" x2="170" y2="140" />}
        {wrongs > 6 && <line id="armR" x1="200" y1="120" x2="230" y2="140" />}
        {wrongs > 7 && <line id="legL" x1="200" y1="150" x2="180" y2="190" />}
        {wrongs > 8 && <line id="legR" x1="200" y1="150" x2="220" y2="190" />}
      </g>
      {wrongs > 0 && <line x1="10" y1="250" x2="150" y2="250" />}
      {wrongs > 0 && <line id="door1" x1="150" y1="250" x2="200" y2="250" />}
      {wrongs > 0 && <line id="door2" x1="200" y1="250" x2="250" y2="250" />}
      {wrongs > 0 && <line x1="250" y1="250" x2="390" y2="250" />}
      {wrongs > 0 && <line x1="100" y1="250" x2="100" y2="20" />}
      {wrongs > 0 && <line x1="100" y1="20" x2="200" y2="20" />}
      {wrongs > 0 && <line id="rope" x1="200" y1="20" x2="200" y2="60" />}
    </svg>
  );
};

export default Pendu;
