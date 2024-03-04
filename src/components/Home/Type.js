import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "С 8 Марта!",
          "Happy March 8th!",
          "Schönen 8. März!",
          "Joyeux 8 mars !",
          "3 月 8 日快樂!",
          "Szczęśliwego 8 marca!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
