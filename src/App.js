import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const artists = ["Razzak", "Anwar", "Joshim"];

function App() {
  return (
    <div>
      <MovieCounter />
      {artists.map((artist) => {
        return <Nayok artistName={artist} />;
      })}
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => setCount(count + 1);
  const handleClickMinus = () => setCount(count - 1);

  return (
    <div>
      <button onClick={handleClickPlus}>Increase</button>
      <button onClick={handleClickMinus}>Decrease</button>
      <p>Value is : {count}</p>
      <DisplayMovies number={count} />
    </div>
  );
}

function DisplayMovies(props) {
  return <p>Movie i have watched: {props.number} </p>;
}

function Nayok(props) {
  const decoration = {
    border: "1px solid red",
    margin: "10px auto",
  };
  const { artistName } = props;
  return (
    <div style={decoration}>
      <h1>Ami {artistName}</h1>
      <h3>I Have Done 5 Movies</h3>
    </div>
  );
}

export default App;
