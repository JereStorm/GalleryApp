import React from 'react';
import Image from './Image';


const Gallery = ({images}) => {
  
  return (
    <section className="gallery">
        {
            images &&
            images.map(photo => (
                < Image photo={photo} key={photo.id}/>
            ))
        }
        {
          images.length === 0 &&
          <div className="container text-center d-flex justify-content-center align-items-center">
            <p className='alert alert-warning text-center alert__text'>No se encontraron resultados</p>
          </div>
        } 
        
    </section>
  )
}

export default Gallery