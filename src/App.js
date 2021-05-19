
import './App.css';
import React,{useState} from 'react';
let IsTooLow = false;
let IsTooHigh = false;
let Success = false;
let Gameover = false;
let NewGame= false;
let randomNumber=Math.floor(Math.random()*11);
let attempsNumber=10;
const App =()=> {
const [smbtNumber,setNumber]= useState("");
const [previousGuess,setPreviousGuess]= useState("");
//const [attempsNumber,setAttempsNumber]= useState(10);




const guess =(e)=>{
  e.preventDefault(); //preventing form to submit
  IsTooLow=false;
  IsTooHigh=false;
  Success=false;
 Gameover=false;
 NewGame=false;
  


const number= parseInt(smbtNumber);
if(number<randomNumber)
{
  IsTooLow=true;
}
if(number >randomNumber)
{
  IsTooHigh=true;
}
if(number ===randomNumber)
{
  Success=true;
  NewGame=true;
}


let guess=previousGuess + smbtNumber;
guess +=",";
setPreviousGuess(guess)
var attemps=attempsNumber-1;
if(attemps===0)
{
  Gameover=true;
  NewGame=true;
}

attempsNumber=attemps;





}
const changeNumber =e=>{
  setNumber(e.target.value);
  
}
const clearNumber =()=>{

  setNumber("");
}

const reset =() =>{
  attempsNumber=10;
  setNumber("");
  setPreviousGuess("");
  IsTooLow=false;
  IsTooHigh=false;
  Success=false;
  Gameover=false;
  NewGame=false;
  randomNumber=Math.floor(Math.random()*11);
 
  
}


  return (
    <div className="App">
     
      <from className="container">

      <label htmlFor="gmNumber " className="iblock">Enter a number</label>
      
      <input type="number"  id="gmNumber" name="gmNumber" className="iblock" value={smbtNumber} onChange={changeNumber}/>
      <div> <input type="button" id="sbmtNumber" name="sbmtNumber" value="Submit number"  onClick={guess}  disabled={NewGame?true:false} />
      <button onClick={clearNumber} disabled={NewGame?true:false}>Clear</button>
      <button onClick={reset}  disabled={NewGame?true:false}>Reset</button>
     </div>
     <hr/>
     <div>
       Remaining attemps: <span>{attempsNumber}</span>
     </div>
     <div className={attempsNumber!==10?"":"hide"}>
       Previous guesses: <span>{previousGuess}</span>
     </div>
     <div className={IsTooLow?"toolow":"hide"}>
      Upsss. Last guess was too low
     </div>
     <div className={IsTooHigh?"toohigh":"hide"}>
      Upsss. Last guess was too high
     </div>
     <div className={Success?"success":"hide"}>
     Congratulations! You got it right!
     </div>
     <div className={Gameover?"gameover":"hide"}>
     GAME OVER!!
     </div>
     <button onClick={reset} className={NewGame?"newgame":"hide"}>Start new game</button>


      </from>



    </div>
  );
}

export default App;
