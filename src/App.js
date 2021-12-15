import './App.css';
import Characters from './views/Characters/Characters';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Films from './views/Films/Films';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>
        </header>
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </BrowserRouter>
      <Characters />
    </div>
  );
}

export default App;
