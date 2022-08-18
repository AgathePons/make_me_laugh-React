// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function NotFound({ className, ...rest }) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      404
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
};
NotFound.defaultProps = {
  className: 'notfound',
};
export default React.memo(NotFound);
