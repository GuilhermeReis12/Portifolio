import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100vh;
  width: 100vw;
  background: url("../assets/images/about-background.jpg") no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #fff;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Sobre Mim</Title>
      <ProfileImage src="../assets/images/goku.jpg" alt="Foto de Perfil" />
      <Content>
        <Subtitle>Olá!</Subtitle>
        <Paragraph>
          Eu sou Guilherme Reis, um desenvolvedor apaixonado por tecnologia e
          inovação. Tenho experiência em diversas áreas da tecnologia e sou
          apaixonado por criar soluções criativas e eficazes para problemas
          complexos.
        </Paragraph>
        <SkillsSection>
          <Subtitle>Tecnologias</Subtitle>
          <SkillsList>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Next.js</SkillItem>
            <SkillItem>Vite</SkillItem>
            <SkillItem>Django</SkillItem>
          </SkillsList>
          <Subtitle>Linguagens</Subtitle>
          <SkillsList>
            <SkillItem>Python</SkillItem>
            <SkillItem>TSX</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>JavaScript</SkillItem>
          </SkillsList>
          <Subtitle>Outros</Subtitle>
          <SkillsList>
            <SkillItem>SQL Server</SkillItem>
            <SkillItem>Kubernetes</SkillItem>
            <SkillItem>AWS</SkillItem>
            <SkillItem>Proxmox</SkillItem>
            <SkillItem>Ubuntu</SkillItem>
          </SkillsList>
        </SkillsSection>
      </Content>
    </AboutContainer>
  );
};

export default About;
