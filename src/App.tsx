import React, { useState, useEffect } from 'react'
import logo from './logo-inline.svg'

import Builder from './components/Builder/Builder'
import Search from './components/Search/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {

  // Should search have it's own "controller"?
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchIndex, setSearchIndex] = useState(0)

  const [chartItems, setChartItems] = useState([
    {},
    {},
    {},
    {},
    {}
  ])

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [searchOpen])

  function handleSearch(val: string) {
    setSearchTerm(val)
    setSearchLoading(true)
    fetch(`http://localhost:4040/search/artists?artist=${val}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((json) => {
        setSearchResults(json || [])
        setSearchLoading(false)
      })
  }

  function handleNavigateSearch(dir: any) {
    if (dir === 'up') {
      setSearchIndex(searchIndex - 1)
    } else if (dir === 'down') {
      setSearchIndex(searchIndex + 1)
    }
  }

  function handleCloseSearch() {
    setSearchOpen(false)
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <Link to="/" className="App__logo">
            <img src={logo} alt="" />
          </Link>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <h1>Create a chart</h1>
              <nav className="Nav">
                <ul className="unstyled Nav__list">
                  <li>
                    <Link to="/top/rappers" className="Nav__item">
                      Top 5 Rappers Of All Time
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/albums" className="Nav__item">
                      Top 5 Albums By Rapper / Group
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/albums" className="Nav__item">
                      Top 5 Albums Of All Time
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/tracks" className="Nav__item">
                      Top 5 Tracks By Rapper / Group
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/top/tracks/all-time" className="Nav__item">
                      Top 5 Tracks Of All Time
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Route>
            <Route path="/top/rappers">
              <Builder items={chartItems} onOpenSearch={() => setSearchOpen(true)}/>
            </Route>
          </Switch>
        </div>
        <Search
          query={searchTerm}
          open={searchOpen}
          activeIndex={searchIndex}
          results={searchResults}
          onSearch={(val: string) => handleSearch(val)}
          onNavigate={(val: string) => handleNavigateSearch(val)}
          onCloseSearch={() => handleCloseSearch()} />
      </div>
    </Router>
  );
}

export default App;
