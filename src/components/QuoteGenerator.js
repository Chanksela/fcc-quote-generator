import React, { useEffect, useState } from "react";
import "./QuoteGenerator.css";
import twitterIcon from "../twitter.svg";
export default function QuoteGenerator() {
  const [quote, setRandomQuote] = useState("");
  const [author, setRandomAuthor] = useState("");
  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let dataQuotes = data;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setRandomQuote(randomQuote.text);
        setRandomAuthor(randomQuote.author);
      });
  };
  const clickHandler = () => {
    getQuote();
  };
  return (
    <div className="App">
      <div id="quote-box">
        <h3 id="text">"{quote}"</h3>
        <p id="author">--{author}</p>
        <div className="btnContainer">
          <button id="new-quote" className="btn" onClick={clickHandler}>
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="btn2"
            href={`https://twitter.com/intent/tweet?text=${quote} ---${author}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
