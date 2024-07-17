import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
    // return ticket.evry((num) => num === ticket[0]); for same num eg -> 777
    // return ticket[0] === 0; for first index num to 0 eg -> 007
  };

  return (
    <>
      <Lottery n={3} winningSum={15} winCondition={winCondition}/>
    </>
  )
}

export default App
