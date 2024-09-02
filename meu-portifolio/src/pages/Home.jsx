import styled from "styled-components";
import CardHome from "../components/Card/CardHome";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: normal;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Bem-vindo ao Meu Portfólio</Title>
      <Subtitle>Explore meus projetos e experiências</Subtitle>
      <Button href="/projects">Ver Projetos</Button>
      <CardHome>
        <CardHome.Title>Sobre Mim</CardHome.Title>
        <CardHome.Content>
          Olá! Eu sou Guilherme Reis, um desenvolvedor apaixonado por tecnologia
          e inovação. Adoro criar soluções criativas e eficazes para problemas
          complexos.
        </CardHome.Content>
      </CardHome>
    </HomeContainer>
  );
};

export default Home;
