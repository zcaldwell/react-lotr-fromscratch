import './App.css';
import Characters from './views/Characters/Characters';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Films from './views/Films/Films';
import Books from './views/Books/Books';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="/" exact>
            Home
          </NavLink>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
