// == Import
import React from 'react';
import PropTypes from 'prop-types';

import { isJokeAlreadyMarked } from '../utils/utils';

import Joke from '../components/Joke';
import Button from '../components/Button';

// == Component
function JokeContainer({
  joke,
  goodJokes,
  badJokes,
  getAJokeClick,
  setInGoodJokesClick,
  setInBadJokesClick,
}) {
  return (
    <>
      {joke && (
        <Joke jokeText={joke} />
      )}
      <Button
        className="give-joke"
        text={joke ? 'Give me another joke' : 'Give me a joke'}
        onButtonClick={getAJokeClick}
      />
      <div className="rating-bloc">
        {joke
          && !isJokeAlreadyMarked(joke, goodJokes)
          && !isJokeAlreadyMarked(joke, badJokes)
          && (
            <>
              <Button
                className="lol"
                text="loooool"
                onButtonClick={setInGoodJokesClick}
              />
              <Button
                className="meh"
                text="Meh......"
                onButtonClick={setInBadJokesClick}
              />
            </>
          )}
      </div>
    </>
  );
}

JokeContainer.propTypes = {
  joke: PropTypes.string,
  goodJokes: PropTypes.array.isRequired,
  badJokes: PropTypes.array.isRequired,
  getAJokeClick: PropTypes.func.isRequired,
  setInGoodJokesClick: PropTypes.func.isRequired,
  setInBadJokesClick: PropTypes.func.isRequired,
};
JokeContainer.defaultProps = {
  joke: null,
};

export default React.memo(JokeContainer);
