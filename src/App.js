import './App.css';
import { useContext } from 'react'
import SearchForm from './components/SearchForm.js';
import LibraryPage from './components/LibraryPage.js';
import { pagesMapping, RoutingContext } from './context/Routing'


function App() {
  const { page, payload } = useContext(RoutingContext)
  return (
  <div className="App">
    <h1 className="bg-black text-white p-5 font-bold">Kahnnsay.</h1>
    <>
     {(pagesMapping.home === page) && <SearchForm />}
     {(pagesMapping.library === page) && <LibraryPage id={payload.id}/>}
    </>
    </div>
  );
}

export default App;
