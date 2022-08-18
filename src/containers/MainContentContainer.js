// == Import
import React, { useState } from 'react';
import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

import requestJoke from '../requests/geekJokesApi';

import JokeContainer from './JokeContainer';

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
    <main className={classNames('main')}>
      <Routes>
        <Route
          path="/"
          element={(
            <JokeContainer
              joke={joke}
              goodJokes={goodJokes}
              badJokes={badJokes}
              getAJokeClick={getAJoke}
              setInGoodJokesClick={setInGoodJokes}
              setInBadJokesClick={setInBadJokes}
            />
          )}
        />
        <Route
          path="/good-ones"
          element={'test good'}
        />
        <Route
          path="/bad-ones"
          element={'test bad'}
        />
      </Routes>
    </main>
  );
}

export default React.memo(MainContainer);
