import React from 'react'
import styled from 'styled-components'

const Unsplash = styled.img`

`

export default ({count = 7, collectionId, alt}) => {
  const images = Array.from(Array(count))
  .map((num, i) => `https://source.unsplash.com/collection/${collectionId}/30${i}x300`)
  return (
    <section className="section gallery">
      <div className="flex">
        {images.map(src => <div key={`image-${src}`}><Unsplash src={src} alt={alt} /></div>)}
      </div>
    </section>
  )
}
