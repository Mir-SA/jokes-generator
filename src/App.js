import React, {useState, useEffect} from 'react';
// import './App.css';

const API_URL = `http://api.icndb.com/jokes/random`

function App() {
  const [joke, setJoke] = useState('')

  var joxx = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke))
  }

  useEffect(() => {
    joxx()
  }, [])

  return (
    <div className="box">
      <h1>Jokes Generator</h1>
      <p dangerouslySetInnerHTML={{__html: joke}} />
      <button onClick={joxx}>
        Honk here 
        <span role='img' aria-label='clown face'>🤡</span>
      </button>
    </div>
  );
}

export default App;
