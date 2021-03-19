import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    [...anecdotes].fill(0, 0, anecdotes.length)
  );
  const [mostVotes, setMostVotes] = useState([anecdotes[0], 0]);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button
        onClick={() => {
          let votesCopy = [...votes];
          votesCopy[selected] += 1;
          let max = Math.max.apply(Math, votesCopy);
          setMostVotes([anecdotes[votesCopy.indexOf(max)], max]);
          setVotes(votesCopy);
        }}
      >
        vote
      </button>
      <button
        onClick={() => setSelected(getRandomInt(0, anecdotes.length - 1))}
      >
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVotes[0]}</p>
      <p>has {mostVotes[1]} votes</p>
    </div>
  );
};

export default App;
