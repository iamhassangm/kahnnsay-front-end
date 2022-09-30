import './App.css';
import { useContext } from 'react'
import SearchForm from './components/SearchForm.js';
import LibraryPage from './components/LibraryPage.js';
import { pagesMapping, RoutingContext } from './context/Routing'


function App() {
  const { page, setPage, payload } = useContext(RoutingContext)
  
  const navigateToHome = () => {
    setPage(pagesMapping.home)
  }
  
  return (
  <div className="App">
    <div className="grid grid-cols-3 gap-4 sticky top-0 bg-black text-white p-5">
    {(pagesMapping.home !== page) && 
      <a className="ml-3 text-left hover:text-white/50 cursor-default mb-3 bg-black" onClick={() => navigateToHome() }>
        <span >&#8592;</span> Home</a>}
     
      <h1 className="col-start-2 font-bold">Kahnnsay.</h1>
    </div>
    <>
     {(pagesMapping.home === page) && <SearchForm />}
     {(pagesMapping.library === page) && <LibraryPage id={payload.id}/>}
    </>
    </div>
  );
}

export default App;
