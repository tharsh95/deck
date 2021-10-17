
import {  useEffect, useState } from 'react';
import './App.css';
import Clubs from './Components/Clubs/Clubs';
import Diamonds from './Components/Diamonds/Diamonds';
import Hearts from './Components/Hearts/Hearts';
import Spades from './Components/Spades/Spades';

function App() {
  const [cards, setCards] = useState([
    "A", "2", "3", "4", "5", "6", "7", "8", "9", '10', "J", "Q", "K"
  ])
  const [suit,setSuit] = useState(["♣","💛","♦","🧡"])
  const [flag, setFlag] = useState(true)
  function handleClick(array,suit) {
    console.log(array)
    array = array.sort(() => Math.random() - 0.5)
    suit = suit.sort(() => Math.random() - 0.5)
      setCards(array)
    console.log(array)
    setSuit(suit)
    setFlag(!flag)
  }

  function fetchCards(array){
  }
  useEffect(()=>{
    // setFlag(!flag)

  },[cards,suit])
  return (
    <>
      <div className="app">
        {cards.map(el => {
          return (
            <Clubs key={el} number={el} suit={suit[0]} />
          )
        })}
        {cards.map(el => {
          return (
            <Diamonds key={el} number={el} suit={suit[2]}/>
          )
        })}
        {cards.map(el => {
          return (
            <Hearts key={el} number={el} suit={suit[1]}/>
          )
        })}
        {cards.map(el => {
          return (
            <Spades key={el} number={el} suit={suit[3]}/>
          )
        })}
      </div>
      <div className="button">
        <button onClick={() => handleClick(cards,suit)}>Shuffle</button>
        <button onClick={()=>fetchCards(cards)}>Fetch 5 cards</button>
      </div>
    </>
  );
}

export default App;
