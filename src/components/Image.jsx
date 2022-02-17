import React, {useEffect} from 'react'

const Image = ({photo}) => {
  useEffect(() => {
    console.log('renderizado Image')
    })
  return (
    <figure className='gallery__picture'>
      <a href={photo.url} tarjet="blank_">
        <img className='gallery__img' src={photo.src.original} alt={photo.alt} width='100' />
      </a>
      <p className='alert__text'>By - {photo.photographer}</p>
    </figure>
  )
}

export default Image