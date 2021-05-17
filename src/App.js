
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {
const [smbtNumber,setNumber]= useState("");
const [attempsNumber,setAttempsNumber]= useState(10);
useEffect(()=>{
console.log(smbtNumber)

},[smbtNumber])

const guess =(e)=>{
  e.preventDefault(); //preventing form to submit
console.log("dd",smbtNumber);
console.log(attempsNumber);
var attemps=attempsNumber-1;
setAttempsNumber(attemps);


}
const changeNumber =e=>{
  setNumber(e.target.value);
  
}
const clearNumber =()=>{

  setNumber("");
}

const reset =() =>{
  setAttempsNumber(10);
  setNumber("");
}

  return (
    <div className="App">
     
      <from className="container">

      <label htmlFor="gmNumber " className="iblock">Enter a number</label>
      
      <input type="number" id="gmNumber" name="gmNumber" className="iblock" value={smbtNumber} onChange={changeNumber}/>
      <div> <input type="button" id="sbmtNumber" name="sbmtNumber" value="Submit number"  onClick={guess} />
      <button onClick={clearNumber}>Clear</button>
      <button onClick={reset}>Reset</button>
     </div>
     <hr/>
     <div>
       Remaining attemps: <span>{attempsNumber}</span>
     </div>
     


      </from>



    </div>
  );
}

export default App;
