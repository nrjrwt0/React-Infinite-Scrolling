import axios from 'axios';
import {useState,useEffect} from 'react'
import Image from './Image';
import styled from 'styled-components'
export default function ImageGallery() {
  const [images,setImages] = useState([]);
  const apiKey = process.env.REACT_APP_APIKEY;

  useEffect(() => {
    fetchImages()
  },[])

  const fetchImages = () => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=12`)
    .then((res) => setImages([...images,...res.data]))}

  return (
      <Container>
          {images.map(image => <Image key={image.id} fullImageUrl={image.urls.full} imageUrl={image.urls.thumb}/>)}
      </Container>
  )
}

const Container = styled.div`
  width:80%;
  margin:auto;
  display:flex;
  flex-wrap:wrap;
  a{
    flex-basis:24%;
    max-height:280px;
    margin:12px 0.5%;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    img{
      width:80%;
      transition:all 0.5s ease-in;
    }
    &:hover{
      img{
      width:76%;
     }
    }
  }
`