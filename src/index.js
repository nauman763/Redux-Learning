import React from 'react';
import ReactDOM from 'react-DOM';
 import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA2Z3BiNfjOW_Dh7jSuValg5NqlO-Nvk0A';
// create component for HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

// put it on page (in to DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
