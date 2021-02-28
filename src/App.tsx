import React, { useState, useEffect } from 'react'
import logo from './logo.svg'

import Builder from './components/Builder/Builder'
import Search from './components/Search/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

function App() {

  let location = useLocation()

  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [searchOpen])

  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <Link to="/">
            <img src={logo} alt="" className="App__logo"/>
          </Link>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <nav className="Nav">
                <h2>Top 5 Rappers</h2>
                <ul className="unstyled Nav__list">
                  <li>
                    <Link to="/top/rappers" className="Nav__item">
                      Top 5 Rappers Of All Time
                      <i className="fa fa-plus"></i>
                    </Link>
                  </li>
                </ul>
                <h2>Top 5 Albums</h2>
                <ul className="unstyled Nav__list">
                  <li>
                    <Link to="/top/albums" className="Nav__item">
                      Top 5 Albums By Rapper / Group
                      <i className="fa fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/albums" className="Nav__item">
                      Top 5 Albums Of All Time
                      <i className="fa fa-plus"></i>
                    </Link>
                  </li>
                </ul>
                <h2>Top 5 Tracks</h2>
                <ul className="unstyled Nav__list">
                  <li>
                    <Link to="/top/tracks" className="Nav__item">
                      Top 5 Tracks By Rapper / Group
                      <i className="fa fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/tracks/all-time" className="Nav__item">
                      Top 5 Tracks Of All Time
                      <i className="fa fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Route>
            <Route path="/top/rappers">
              <Builder onOpenSearch={() => setSearchOpen(true)}/>
            </Route>
          </Switch>
        </div>
        <Search open={searchOpen} onCloseSearch={() => setSearchOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
