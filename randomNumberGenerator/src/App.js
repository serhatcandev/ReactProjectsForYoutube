import React, {useState} from "react"
import "./style.css"

function App() {

  const [minVal,setMinVal] = useState(0);
  const [maxVal,setMaxVal] = useState(10);
  const [randomVal,setRandomVal] = useState(1);

  const randomGenerator = () => {
    setRandomVal(Math.floor(Math.random()*(maxVal - minVal +1)+ minVal))
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random num is: {randomVal}</p>
        </div>
        <div className="numsContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={e => setMinVal(+e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e => setMaxVal(+e.target.value)}/>
          </div>
          <button onClick={randomGenerator}>Generate random number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
