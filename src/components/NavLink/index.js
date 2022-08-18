// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function NavLink({
  icon,
  altText,
  className,
  ...rest
}) {
  return (
    <a
      className={classNames('nav__link', className)}
      {...rest}
    >
      <img
        className={classNames('nav__link__icon')}
        src={icon}
        alt={altText}
      />
    </a>
  );
}

NavLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
NavLink.defaultProps = {
  className: 'nav__link',
};
export default React.memo(NavLink);
