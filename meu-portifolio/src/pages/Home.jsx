import styled from "styled-components";
import profileImage from "../assets/images/guilherme.jpg";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  padding: 0 20px;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 200px; 
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-top: 100px; /* Adiciona margem superior em dispositivos móveis */
  }
`;

const PhotoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const TextWrapper = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff5722;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e64a19;
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <PhotoWrapper>
          <ProfileImage src={profileImage} alt="Foto de Perfil" />
        </PhotoWrapper>
        <TextWrapper>
          <Title>Bem-vindo ao Meu Portfólio</Title>
          <Subtitle>Sobre Mim</Subtitle>
          <Paragraph>
            Olá! Eu sou Guilherme Reis, um desenvolvedor apaixonado por
            tecnologia e inovação. Minha jornada na área de desenvolvimento é
            guiada por um grande objetivo: evoluir constantemente em minha
            carreira e alcançar novos patamares de excelência técnica e
            profissional. Sou uma pessoa focada e dedicada, sempre buscando
            compreender e analisar profundamente cada situação que encontro.
            Esse compromisso com a compreensão e a solução eficaz de problemas
            me permite criar soluções criativas e inovadoras, adaptadas às
            necessidades específicas de cada projeto. Acredito que a chave para
            o sucesso é a combinação de conhecimento técnico sólido e uma
            abordagem proativa para resolver desafios. Estou sempre em busca de
            aprender e me aprimorar, com o objetivo de contribuir
            significativamente para cada projeto em que estou envolvido e
            crescer como profissional na área de desenvolvimento.
          </Paragraph>
          <Button href="/projects">Ver Projetos</Button>
        </TextWrapper>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
