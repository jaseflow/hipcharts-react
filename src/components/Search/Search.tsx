import React from 'react';

interface SearchProps {
  open?: Boolean;
  onCloseSearch?: any;
}

const Search: React.FC<SearchProps> = (props) => (
  <div className={`Search ${props.open ? 'Search--open' : ''}`}>
    <i className="fa fa-times Search__close" onClick={props.onCloseSearch}></i>
  </div>
);

export default Search;
