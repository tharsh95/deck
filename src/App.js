
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
  const [fcard1, setFcard1]= useState('')
  const [fcard2, setFcard2]= useState('')
  const [fcard3, setFcard3]= useState('')
  const [fcard4, setFcard4]= useState('')
  const [fcard5, setFcard5]= useState('')


  function handleClick(array) {
    array = array.sort(() => Math.random() - 0.5)
    setCards(array)
    console.log(array)
  }
  useEffect(() => {
    setFlag(!flag)
  }, [cards,flag])
  function fetchCards(array){
    let rand1  = (Math.floor(Math.random()*51)+1)
    let rand2  = (Math.floor(Math.random()*51)+1)
    let rand3  = (Math.floor(Math.random()*51)+1)
    let rand4  = (Math.floor(Math.random()*51)+1)
    let rand5  = (Math.floor(Math.random()*51)+1)


    setFcard1(array.slice(rand1,rand1+1))
    setFcard2(array.slice(rand2,rand2+1))
    setFcard3(array.slice(rand3,rand3+1))
    setFcard4(array.slice(rand4,rand4+1))
    setFcard5(array.slice(rand5,rand5+1))
    // console.log(fcard)
    // console.log(fcard)
    
  }
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
        <button onClick={()=>fetchCards(cards)}>Fetch 5 cards</button>
      </div>
      <div>
        
        <div id="fcard">
        <p>{fcard1}</p>
        <p>{fcard2}</p>
        <p>{fcard3}</p>
        <p>{fcard4}</p>
        <p>{fcard5}</p>

        </div>
      </div>
    </>
  );
}

export default App;
