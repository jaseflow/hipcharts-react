import React, { useEffect, useRef, useCallback } from 'react';

interface SearchResultProps {
  images?: any[];
  imageUrl?: string;
  name?: string;
  active?: Boolean;
  subText?: string;
  id?: string;
  onResultClick?: any;
}

interface SearchProps {
  open?: Boolean;
  query?: string;
  results?: SearchResultProps[];
  activeIndex?: number;
  onNavigate?: any;
  onCloseSearch?: any;
  onSearch?: any;
}

const SearchResult: React.FC<SearchResultProps> = (props) => (
  <li onClick={() => props.onResultClick(props)}
    className={`SearchResult ${props.active ? 'SearchResult--active' : ''}`}>
    <div className="SearchResult__thumb">
      {props.imageUrl &&
        <img src={props.imageUrl} alt="" />
      }
    </div>
    <p className="SearchResult__name">
      {props.name}
      {props.subText && <small>{props.subText}</small>}
    </p>
  </li>
)

const Search: React.FC<SearchProps> = (props) => {

  const searchBox = useRef(document.createElement("input"))

  const handleKeydown = useCallback(event => {
    const { keyCode } = event;

    if (keyCode === 27) {
      console.log('closing by esc')
      props.onCloseSearch()
    }
    if (keyCode === 40) {
      event.preventDefault()
      props.onNavigate('down')
    } else if (keyCode === 38) {
      event.preventDefault()
      props.onNavigate('up')
    }
  }, [props]);

  useEffect(() => {
    if (props.open) {
      window.addEventListener('keydown', handleKeydown);
      searchBox.current.focus()
    }
  }, [props.open])

  const resultsList = props.results && props.results.length && props.results.slice(0, 5).map((r, i) => {
    const firstImage = r.images && r.images.length && r.images[0]
    
    return (
      <SearchResult
        imageUrl={firstImage.url}
        name={r.name}
        id={r.id}
        key={`result-${r.id}`}
        active={props.activeIndex === i}
      />
    )
  })

  return (
    <div className={`Search ${props.open ? 'Search--open' : ''}`}>
      <div className="container">
        <header className="Search__header">
          <input
            type="search"
            onKeyUp={(e) => props.onSearch((e.target as HTMLInputElement).value)}
            className="Search__input"
            placeholder="Search"
            ref={searchBox}
          />
          <span
            className="Search__close"
            onClick={props.onCloseSearch}>
            Close
          </span>
        </header>
        <div className="Search__results">
          <h3 className="Search__playback"><span>Searching for</span> {props.query}</h3>
          <ol>
            {props.results && !props.results.length && <p className="Search__empty">No results found</p>}
            {props.results && props.results.length > 0 && resultsList }
          </ol>
        </div>
      </div>
    </div>
  )
};

export default Search;
