// == Import
import React, { useState } from 'react';
import classNames from 'classnames';

import requestJoke from '../requests/geekJokesApi';

import Joke from '../components/Joke';
import Button from '../components/Button';

// == Component
function MainContainer() {
  const [joke, setJoke] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const getAJoke = async () => {
    const newJoke = await requestJoke();
    setJoke(newJoke.data.joke);
    return newJoke.data.joke;
  };

  const setInGoodJokes = () => {
    setGoodJokes((current) => ([
      ...current,
      joke,
    ]));
  };

  const setInBadJokes = () => {
    setBadJokes((current) => ([
      ...current,
      joke,
    ]));
  };

  return (
    <main
      className={classNames('main')}
    >
      {joke && (
        <Joke jokeText={joke} />
      )}
      <Button
        className="joke"
        text={joke ? 'Give me another joke' : 'Give me a joke'}
        onButtonClick={getAJoke}
      />
      {(joke && (!badJokes.includes(joke) && !goodJokes.includes(joke))) && (
        <>
          <Button
            className="lol"
            text="loooool"
            onButtonClick={setInGoodJokes}
          /><Button
            className="meh"
            text="Meh......"
            onButtonClick={setInBadJokes}
          />
        </>
      )}
    </main>
  );
}

export default React.memo(MainContainer);
