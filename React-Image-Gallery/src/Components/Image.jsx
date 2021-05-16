import React from 'react'

export default function Image({imageUrl,fullImageUrl}) {
  return (
      <a href={fullImageUrl} target="_blank">
        <img src={imageUrl}/> 
      </a>
  )
}
