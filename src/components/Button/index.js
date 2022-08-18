// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Button({ className, ...rest }) {
  return (
    <button
      className={classNames('button', className)}
      {...rest}
    >
      test
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {
  className: 'button',
};
export default React.memo(Button);
