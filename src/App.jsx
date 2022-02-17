import React, { useEffect, useState } from 'react';
import Gallery from "./components/Gallery";

const baseURL = 'https://api.pexels.com/v1/';
const ApiKey = '563492ad6f91700001000001f10b63e5fdf344efb9bddbabf42e01d5';

const initialArray = [];

const App = ()=> {
  const [searcher, setSearcher] = useState('any');
  const [images, setImages] = useState(initialArray)

  useEffect(() => {
  console.log('renderizado APP')
  })
  
    useEffect(() => {
      console.log('Use efect searcher: '+searcher)
      searchImage();
    }, [searcher])

    useEffect(() => {
      console.log('Use efect Imagenes: '+images)
    }, [images])
    
    
    const updateSearcher = (e) => {
      e.preventDefault();
      setSearcher(e.target.search.value)
    };

    const searchImage= async () => {
        const url = baseURL+'search?locale=es-ES&&';

        try {
          const res = await fetch(`${url}query=${searcher}&&per_page=3`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ApiKey
            },
          });
          if (res.ok) {
              const images = await res.json();
              setImages(images.photos)
          } else {
              console.log("No encontrado")
          }
        } catch (error) {
            console.log('Error '+ error)
        }
    };

  return (
    <div className="App">
      <h1 className="text-center title">Gallery App</h1>
      <form onSubmit={(e) => updateSearcher(e)}>
        <input className='form-control w-80' type="text" name='search' />
      </form>
    
      <Gallery images={images}/>
    </div>
  );
}

export default App;
