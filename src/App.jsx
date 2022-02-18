import React, { useEffect, useState } from 'react';
import SearchImage from './helpers/SearchImage';
import Gallery from "./components/Gallery";
import Spinner from './components/Spinner'

// const initialArray = [
//   {
//       "id": 3912608,

//       "url": "https://www.pexels.com/es-es/foto/punto-de-referencia-nublado-oscuro-arquitectura-3912608/",
//       "photographer": "Withsonya_",
    
//       "src": {
//           "original": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg",
//           "large2x": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//           "large": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//           "medium": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&h=350",
//           "small": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&h=130",
//           "portrait": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//           "landscape": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//           "tiny": "https://images.pexels.com/photos/3912608/pexels-photo-3912608.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "alt": "Fotos de stock gratuitas de adorar, al aire libre, alabanza"
//   },
//   {
//       "id": 5574810,
      
//       "url": "https://www.pexels.com/es-es/foto/vuelo-pajaro-volador-animal-5574810/",
//       "photographer": "Jessica",
      
//       "src": {
//           "original": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg",
//           "large2x": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//           "large": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//           "medium": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&h=350",
//           "small": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&h=130",
//           "portrait": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//           "landscape": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//           "tiny": "https://images.pexels.com/photos/5574810/pexels-photo-5574810.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "alt": "Fotos de stock gratuitas de alas, animal, cielo azul"
//   },
//   {
//       "id": 7733423,
     
//       "url": "https://www.pexels.com/es-es/foto/carretera-casas-estrecho-reino-unido-7733423/",
//       "photographer": "Aleks Marinkovic",
//       "src": {
//           "original": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg",
//           "large2x": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//           "large": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//           "medium": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&h=350",
//           "small": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&h=130",
//           "portrait": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//           "landscape": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//           "tiny": "https://images.pexels.com/photos/7733423/pexels-photo-7733423.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "alt": "Fotos de stock gratuitas de carretera, casas, cualquier luz vieja"
//   }
// ];

const initialArray = [];

const App = ()=> {
  const [searcher, setSearcher] = useState('any');
  const [images, setImages] = useState(initialArray);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

 
    useEffect(() => {
      console.log('Use efect searcher: '+searcher);
      updateImage();

    }, [searcher])

    useEffect(() => {
      console.log('Use efect Imagenes: '+images)
    }, [images])

    const updateImage = () => {
      setLoading(true)
      SearchImage({searcher})
      .then((images) => {
        setResults(images.total_results)
        setImages(images.photos)
        setLoading(false)
      })
    
    }
    
    const updateSearcher = (e) => {
      e.preventDefault();
      setSearcher(e.target.search.value)
    };

  return (
    <div className="App">
      <form onSubmit={(e) => updateSearcher(e)} className="mt-5">
        <input className='form-control w-80' type="text" name='search' />
      </form>
    { results !== 0 &&
      <div className='d-flex justify-content-center align-items-cneter mt-5'>
        <p className='btn btn-outline-light text-center'>Resultados = {results}</p>
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
    </div>
  );
}

export default App;
