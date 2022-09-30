import './App.css';
import { useContext } from 'react'
import SearchForm from './components/SearchForm.js';
import LibraryPage from './components/LibraryPage.js';
import { pagesMapping, RoutingContext } from './context/Routing'


function App() {
  const { page, payload } = useContext(RoutingContext)
  return (
  <div className="App">
    
    <>
     {(pagesMapping.home === page) && <SearchForm />}
     {(pagesMapping.library === page) && <LibraryPage id={payload.id}/>}
    </>
    </div>
  );
}

export default App;
