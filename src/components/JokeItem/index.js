// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function JokeItem({ jokeText, className, ...rest }) {
  return (
    <>
      <article
        className={classNames(className)}
        {...rest}
      >
        {jokeText}
      </article>
      <div className={classNames('separator')} />
    </>
  );
}

JokeItem.propTypes = {
  className: PropTypes.string,
  jokeText: PropTypes.string.isRequired,
};
JokeItem.defaultProps = {
  className: 'jokeitem',
};
export default React.memo(JokeItem);
