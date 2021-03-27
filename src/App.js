import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav';
import './Nav.css';

function App() {
  return (
    <div className="app">
        <Nav />
        <Banner />
        <Row 
         title='Netflix originals'
         fetchURL={requests.fetchNetflixOriginals} 
         isLarge
         />
        <Row title='Trending now' fetchURL={requests.fetchTrending} />
        <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
        <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
        <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchURL={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
