import React from 'react';
import Row from './Row'
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
    <h1>netflix front end</h1>
    <Row title="Most watched" fetchUrl={requests.fetchMostwatched}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
