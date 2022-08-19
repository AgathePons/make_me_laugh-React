// == Import
import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import NavLinkItem from '../components/NavLink';
import homeIcon from '../assets/icon/house-solid.svg';
import lolIcon from '../assets/icon/face-grin-tears-solid.svg';
import trashIcon from '../assets/icon/trash-can-solid.svg';
import githubIcon from '../assets/icon/github-brands.svg';

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
              to="/agathe-pons/make-me-laugh/"
              className={classNames(
                'header__nav__list__item__link',
                ({ isActive }) => (isActive ? 'active' : ''),
              )}
            >
              <NavLinkItem
                icon={homeIcon}
                altText="Homepage - Get a joke"
              />
            </NavLink>
          </li>
          <li className={classNames('header__nav__list__item')}>
            <NavLink
              to="/agathe-pons/make-me-laugh/good-ones"
              className={classNames(
                'header__nav__list__item__link',
                ({ isActive }) => (isActive ? 'active' : ''),
              )}
            >
              <NavLinkItem
                icon={lolIcon}
                altText="Good jokes"
              />
            </NavLink>
          </li>
          <li className={classNames('header__nav__list__item')}>
            <NavLink
              to="/agathe-pons/make-me-laugh/bad-ones"
              className={classNames(
                'header__nav__list__item__link',
                ({ isActive }) => (isActive ? 'active' : ''),
              )}
            >
              <NavLinkItem
                icon={trashIcon}
                altText="Bad jokes"
              />
            </NavLink>
          </li>
          <li className={classNames('header__nav__list__item')}>
            <a
              href="https://github.com/AgathePons/make_me_laugh-React"
              target="_blank"
              rel="noreferrer"
              className={classNames('header__nav__list__item__link')}
            >
              <NavLinkItem
                icon={githubIcon}
                altText="GitHub icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(HeaderContainer);
