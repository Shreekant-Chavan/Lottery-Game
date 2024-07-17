import { useState } from "react";
import './Lottery.css'
import { genTickets, sum } from "./helper";

export default function Lottery() {
    let [tickets, setTickets] = useState(genTickets(3));
    let isWinning = sum(tickets) === 15;

    let buyTicket = () => {
        setTickets(genTickets(3));
    }

    return (
        <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
        <span>{tickets [0]}</span>
        <span>{tickets [1]}</span>
        <span>{tickets [2]}</span>
        </div>
        <h3>{isWinning && "Congratulation! You Won...!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
    );
}