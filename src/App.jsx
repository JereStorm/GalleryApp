import React, { useEffect, useState } from 'react';
import SearchImage from './helpers/SearchImage';
import Gallery from "./components/Gallery";
import Spinner from './components/Spinner'

const initialArray = [];



const App = ()=> {

  const [searcher, setSearcher] = useState('any');
  const [images, setImages] = useState(initialArray);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    searcher !== '' &&
    updateImage();

  }, [searcher]);

  const baseURL = 'https://api.pexels.com/v1/';

  const updatePage = () => {
   
  }

  const updateImage = () => {
    const url = baseURL+`search?locale=es-ES&&query=${searcher}&&per_page=3`;

    setLoading(true)
    SearchImage({url})
    .then((images) => {
      setResults(images.total_results)
      setImages(images.photos)
      setLoading(false)
      setNextPage(images.next_page)
    })
  
  }
  
  const updateSearcher = (e) => {
    e.preventDefault();
    setSearcher(e.target.search.value)
  };

  return (
    <div className="App">
      <form onSubmit={(e) => updateSearcher(e)} className="mt-5">
        <input className='form-control w-80' placeholder='Buscar algo...' type="text" name='search' />
      </form>
    { results !== 0 &&
      <div className='d-flex justify-content-center align-items-cneter mt-5'>
        <p className='btn btn-outline-light text-center'>({results}) Resultados</p>
      </div>
    }
    {
      loading 
      ? 
      <div className='d-flex justify-content-center align-items-center'>
        < Spinner />
      </div>
      :
      <Gallery images={images} />
    }
      <div className='d-flex justify-content-center align-items-cneter mt-2'>
        <button onClick={() => updatePage()} className='btn btn-outline-light text-center m-2'>Mas...</button>
      </div>
    </div>
  );
}

export default App;
