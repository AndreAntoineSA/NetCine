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
    <Row title="Top Rated" fetchUrl={requests.fetchToprated}/>
    <Row title="Action movies" fetchUrl={requests.fetchActionmovies}/>
    <Row title="Comedy movies" fetchUrl={requests.fetchComedymovies}/>
    <Row title="Horror movies" fetchUrl={requests.fetchHorrormovies}/>
    <Row title="Romance movies" fetchUrl={requests.fetchRomancemovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentries}/>

    </div>
  );
}

export default App;
