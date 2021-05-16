import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './App.css';
import ImageGallery from './Components/ImageGallery';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
  }
`;

function App() {
  return (
    <div className='App'>
      <H1>Image Gallery</H1>
      <GlobalStyle />
      <ImageGallery />
    </div>
  );
}

export default App;

const H1 = styled.h1`
  color: tomato;
  margin-bottom: 32px;
  font-size: 44px;
`;
