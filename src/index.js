// == Import : npm
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import App from 'src/containers/AppContainer';

// == Render
const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const target = document.getElementById('root');
render(rootReactElement, target);
