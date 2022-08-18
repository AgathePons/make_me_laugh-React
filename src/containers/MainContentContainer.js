// == Import
import React, { useState } from 'react';
import classNames from 'classnames';

import requestJoke from '../requests/geekJokesApi';

import Joke from '../components/Joke';
import Button from '../components/Button';

// == Component
function MainContainer() {
  const [joke, setJoke] = useState(null);

  const getAJoke = async () => {
    const newJoke = await requestJoke();
    setJoke(newJoke.data.joke);
    return newJoke.data.joke;
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
      {joke && (
        <>
          <Button
            className="lol"
            text="loooool"
            onButtonClick={() => console.log('tut lol')}
          /><Button
            className="meh"
            text="Meh......"
            onButtonClick={() => console.log('tut meh')}
          />
        </>
      )}

    </main>
  );
}

export default React.memo(MainContainer);
