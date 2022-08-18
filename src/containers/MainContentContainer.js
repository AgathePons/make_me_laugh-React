// == Import
import React from 'react';
import classNames from 'classnames';

import Button from '../components/Button';

// == Component
function MainContainer() {
  return (
    <main
      className={classNames('main')}
    >
      <Button className={'lol'} />
      joke here
    </main>
  );
}

export default React.memo(MainContainer);
