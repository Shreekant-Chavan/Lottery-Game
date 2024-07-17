import { useState } from "react";
import './Lottery.css'
import { genTickets, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}) {
    let [tickets, setTickets] = useState(genTickets(n));
    let isWinning = winCondition(tickets);

    let buyTicket = () => {
        setTickets(genTickets(n));
    }

    return (
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={tickets} />
        <Button action={buyTicket} />
        <h3>{isWinning && "Congratulation! You Won...!"}</h3>
        </div>
    );
}