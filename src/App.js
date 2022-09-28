import './App.css';
import { useContext } from 'react'
import SearchForm from './components/SearchForm.js';
import { pagesMapping, RoutingContext } from './context/Routing'


function App() {
  const { page } = useContext(RoutingContext)
  return (
  <div className="App">
     <h1>Search. Books.</h1>
    <>
     {(pagesMapping.home === page) && <SearchForm />}
    </>
    </div>
  );
}

export default App;
