import React, { useState, useEffect  } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const url = 'https://animechan.vercel.app/api/random';

export default function App() {

  function refreshPage() {
    window.location.reload(false);

  };

  const [animeQuotes, setQuotes] = useState([]);

  const getQuotes = async() =>{
    const response = await fetch(url);
    const animeQuotes = await response.json();

    setQuotes(animeQuotes);
  }

    useEffect(() => {
      getQuotes();
    }, []);

    return (
      <div id="quotes__container" class="quotes__class">
        <div class="anime__quote">
          <p class="quote">{animeQuotes["quote"]}</p>
          <p class="quote__information">— <strong>{animeQuotes["character"]}</strong>, <em>{animeQuotes["anime"]}</em></p>
        </div>

        <div>
          <p>
            <button type="button" class="btn btn-primary" onClick={refreshPage}>Get New Quote</button>
          </p>
        </div>
      </div>
    )

}