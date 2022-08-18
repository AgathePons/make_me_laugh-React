// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Joke({ jokeText, className, ...rest }) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      {jokeText}
    </div>
  );
}

Joke.propTypes = {
  className: PropTypes.string,
  jokeText: PropTypes.string.isRequired,
};
Joke.defaultProps = {
  className: 'joke',
};
export default React.memo(Joke);
