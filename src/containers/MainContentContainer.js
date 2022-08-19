// == Import
import { useState } from 'react';
import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

import requestJoke from '../requests/geekJokesApi';
import { getNewId } from '../utils/utils';

import JokeContainer from './JokeContainer';
import JokesArrayContainer from './JokesArrayContainer';
import NotFound from '../components/NotFound';

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
      {
        id: getNewId(goodJokes),
        joke: joke,
      },
    ]));
  };

  const setInBadJokes = () => {
    setBadJokes((current) => ([
      ...current,
      {
        id: getNewId(badJokes),
        joke: joke,
      },
    ]));
  };

  return (
    <main className={classNames('main')}>
      <Routes>
        <Route
          path="/agathe-pons/make-me-laugh/"
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
          path="/agathe-pons/make-me-laugh/good-ones"
          element={(
            <JokesArrayContainer
              title="The best jokes ever!!!!😂😆😜😂"
              jokes={goodJokes}
            />
          )}
        />
        <Route
          path="/agathe-pons/make-me-laugh/bad-ones"
          element={(
            <JokesArrayContainer
              title="The jokes that really suck!!!!😒😞😖"
              jokes={badJokes}
            />
          )}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
}

export default MainContainer;
