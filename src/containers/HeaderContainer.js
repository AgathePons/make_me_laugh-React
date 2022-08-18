// == Import
import React from 'react';
import classNames from 'classnames';

import NavLink from '../components/NavLink';
import homeIcon from '../assets/icon/house-solid.svg';
import lolIcon from '../assets/icon/face-grin-tears-solid.svg';
import trashIcon from '../assets/icon/trash-can-solid.svg';

// == Component
function HeaderContainer() {
  return (
    <header
      className={classNames('header')}
    >
      <nav className={classNames('header__nav')}>
        <ul className={classNames('header__nav__list')}>
          <li className={classNames('header__nav__list__item')}>
            <NavLink
              icon={homeIcon}
              altText="Homepage - Get a joke"
            />
          </li>
          <li>
          <NavLink
              icon={lolIcon}
              altText="Good jokes"
            />
          </li>
          <li>
          <NavLink
              icon={trashIcon}
              altText="Bad jokes"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default React.memo(HeaderContainer);
