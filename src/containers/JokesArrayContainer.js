// == Import
import React from 'react';
import PropTypes from 'prop-types';

// == Component
function JokeContainer({
  jokes,
  title,
}) {
  return (
    <div className="jokes">
      <h1 className="jokes__title">
        {jokes.length === 0 && (
          'There is no joke here. Mark a joke to add jokes.'
        )}
        {jokes.length > 0 && (
          title
        )}
      </h1>
    </div>
  );
}

JokeContainer.propTypes = {
  jokes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(JokeContainer);
