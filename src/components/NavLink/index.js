// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function NavLinkItem({
  icon,
  altText,
  className,
  ...rest
}) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      <img
        className={classNames('nav__link__icon')}
        src={icon}
        alt={altText}
      />
    </div>
  );
}

NavLinkItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
NavLinkItem.defaultProps = {
  className: 'nav__link',
};
export default React.memo(NavLinkItem);
