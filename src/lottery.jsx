import { useState } from "react";
import "./lottery.css";
import {getTicket,  sum } from "./helper";

export default function Lottery() {
  const [ticket, setTicket] = useState(getTicket(3));
const isWinning = sum(ticket) === 15
function updateValue(){
    setTicket(getTicket(3))
}
  return (
      <>
      <h2>{isWinning && "Congratulation !! You Won The Lottery💵"}</h2>
      <div className="full-container">
        <h1>Lottery Game!🤑</h1>
        <div className="lottery">
           <span>{ticket[0]}</span> 
           <span>{ticket[1]}</span> 
           <span>{ticket[2]}</span> 
        </div>
        <button onClick={updateValue}>Generate a new ticket</button>
        
      </div>
    </>
  );
}
