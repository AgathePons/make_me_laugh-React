// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Button({
  text,
  onButtonClick,
  className,
  ...rest
}) {
  return (
    <button
      type="button"
      className={classNames('button', className)}
      onClick={onButtonClick}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  className: 'button',
};
export default React.memo(Button);
