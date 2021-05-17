
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {
const [smbtNumber,setNumber]= useState("");
const [randomNumber,setRandomNumber]= useState(Math.floor(Math.random()*11));
const [previousGuess,setPreviousGuess]= useState("");
const [attempsNumber,setAttempsNumber]= useState(10);
const [isTooLow,setIsTooLow]= useState(false);
const [isTooHigh,setIsTooHigh]= useState(false);
const [success,setSuccess]= useState(false);
const [gameover,setGameover]= useState(false);
const [newGame,setNewGame]= useState(false);

useEffect(()=>{

  //

},[])

const guess =(e)=>{
  e.preventDefault(); //preventing form to submit
  setIsTooLow(false);
  setIsTooHigh(false);
  setSuccess(false);
  setGameover(false);
  setNewGame(false);
  

const number= parseInt(smbtNumber);
if(number<randomNumber)
{
  setIsTooLow(true);
}
if(number >randomNumber)
{
  setIsTooHigh(true);
}
if(number ===randomNumber)
{
  setSuccess(true);
  setNewGame(true);
}


let guess=previousGuess + smbtNumber;
guess +=",";
setPreviousGuess(guess)
var attemps=attempsNumber-1;
if(attemps===0)
{
  setGameover(true)
  setNewGame(true);
}

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
  setIsTooLow(false);
  setIsTooHigh(false);
  setSuccess(false);
  setGameover(false);
  setNewGame(false);
  let rndNumber=Math.floor(Math.random()*11);
  setRandomNumber(rndNumber);
  
}


  return (
    <div className="App">
     
      <from className="container">

      <label htmlFor="gmNumber " className="iblock">Enter a number</label>
      
      <input type="number"  id="gmNumber" name="gmNumber" className="iblock" value={smbtNumber} onChange={changeNumber}/>
      <div> <input type="button" id="sbmtNumber" name="sbmtNumber" value="Submit number"  onClick={guess}  disabled={newGame?true:false} />
      <button onClick={clearNumber} disabled={newGame?true:false}>Clear</button>
      <button onClick={reset}  disabled={newGame?true:false}>Reset</button>
     </div>
     <hr/>
     <div>
       Remaining attemps: <span>{attempsNumber}</span>
     </div>
     <div className={attempsNumber!==10?"":"hide"}>
       Previous guesses: <span>{previousGuess}</span>
     </div>
     <div className={isTooLow?"toolow":"hide"}>
      Upsss. Last guess was too low
     </div>
     <div className={isTooHigh?"toohigh":"hide"}>
      Upsss. Last guess was too high
     </div>
     <div className={success?"success":"hide"}>
     Congratulations! You got it right!
     </div>
     <div className={gameover?"gameover":"hide"}>
     GAME OVER!!
     </div>
     <button onClick={reset} className={newGame?"newgame":"hide"}>Start new game</button>


      </from>



    </div>
  );
}

export default App;
