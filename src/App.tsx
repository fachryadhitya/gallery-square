import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import { colorObjj } from "./dummy";

function App() {
  const [show, setShow] = useState(colorObjj);

  //show matching color, in this case, i choose red
  const showMatchingColor = (): void => {
    setShow(colorObjj.filter((i) => i.color === "red"));
  };

  //showing all color again
  const showAllColor = (): void => {
    setShow(colorObjj);
  };

  return (
    <div className="App pt-half">
      <button className="mr-1" onClick={showMatchingColor}>
        Show Matching Color Only
      </button>
      <button className="mr-1" onClick={showAllColor}>
        Show All Color
      </button>
      <label> Category Color: </label>
      <select
        value={show.map((i) => i.color)[0]}
        onChange={(event) =>
          setShow(colorObjj.filter((i) => i.color === event.target.value))
        }
      >
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="brown">Brown</option>
        <option value="blue">Blue</option>
      </select>
      <div className="container">
        {show.map((item, index) => (
          <Box key={index} color={item.color} opacity={item.opacity} />
        ))}
      </div>
    </div>
  );
}

export default App;
