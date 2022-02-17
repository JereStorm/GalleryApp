import React from 'react'

const Image = ({photo, key}) => {
  return (
    <figure className='gallery__picture'>
      <img className='gallery__img' src={photo.src.original} alt={photo.alt} width='100' />
    </figure>
  )
}

export default Image