import './App.css';
import { useContext } from 'react'
import SearchForm from './components/SearchForm.js';
import LibraryPage from './components/LibraryPage.js';
import { pagesMapping, RoutingContext } from './context/Routing'


function App() {
  const { page, payload } = useContext(RoutingContext)
  console.log(page)
  return (
  <div className="App bg-slate-100">
     <h1>Search. Books.</h1>
    <>
     {(pagesMapping.home === page) && <SearchForm />}
     {(pagesMapping.library === page) && <LibraryPage id={payload.id}/>}
    </>
    </div>
  );
}

export default App;
