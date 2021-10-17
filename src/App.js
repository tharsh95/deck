
import { useEffect, useState } from 'react';
import './App.css';
import Clubs from './Components/Clubs/Clubs';

function App() {
  const [cards, setCards] = useState([
    "A♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", '10♣', "J♣", "Q♣", "K♣",
    "A🔷", "2🔷", "3🔷", "4🔷", "5🔷", "6🔷", "7🔷", "8🔷", "9🔷", "10🔷", "J🔷", "Q🔷", "K🔷",
    "A❤", "2❤", "3❤", "4❤", "5❤", "6❤", "7❤", "8❤", "9❤", "10❤", "J❤", "Q❤", "K❤",
    "A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠",
  ])
  const [flag, setFlag] = useState(false)


  function handleClick(array) {
    array = array.sort(() => Math.random() - 0.5)
    setCards(array)
    console.log(array)
  }
  useEffect(() => {
    setFlag(!flag)
  }, [cards,flag])
  return (
    <>
      <div className="app">
        {cards.map(el => {
          return (
            <Clubs key={el} number={el} />
          )
        })}

      </div>
      <div className="button">
        <button onClick={() => handleClick(cards)}>Shuffle</button>
        <button>Fetch 5 cards</button>
      </div>
    </>
  );
}

export default App;
