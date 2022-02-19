import React from 'react';

const Image = ({photo}) => {
  
  return (
    <figure className='gallery__picture'>
      <a href={photo.url} tarjet="blank_">
        <img className='gallery__img' src={photo.src.original} alt={photo.alt} width='100' />
      </a>
      <p className='alert__text'>By <a className='text-info ms-2' href={photo.photographer_url}>{photo.photographer}</a> </p>
    </figure>
  )
}

export default Image