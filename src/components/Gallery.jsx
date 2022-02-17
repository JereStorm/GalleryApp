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
    </section>
  )
}

export default Gallery