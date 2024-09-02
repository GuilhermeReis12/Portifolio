// src/components/home/Background.jsx
import styled from 'styled-components';
import backgroundImage from '../assets/images/planodefundo.jpg'; 

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Background = () => {
  return <BackgroundContainer />;
};

export default Background;
