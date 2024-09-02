import styled from "styled-components";
import { FaNode, FaReact, FaPython, FaJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiVite, SiDjango, SiTypescript, SiMysql } from 'react-icons/si';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
    margin-top:100px;
  }
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  max-width: 150px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease, transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 120px;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const About = () => {
  return (
    <AboutContainer>
      <Content>
        <Title>Sobre Mim</Title>
        <Paragraph>
          Olá! Eu sou Guilherme Reis, um desenvolvedor apaixonado por tecnologia e
          inovação. Tenho experiência em diversas áreas da tecnologia e sou
          apaixonado por criar soluções criativas e eficazes para problemas
          complexos.
        </Paragraph>
        <SkillsSection>
          <Subtitle>Tecnologias</Subtitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon><FaNode /></SkillIcon>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaReact /></SkillIcon>
              <SkillName>React</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiNextdotjs /></SkillIcon>
              <SkillName>Next.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiVite /></SkillIcon>
              <SkillName>Vite</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiDjango /></SkillIcon>
              <SkillName>Django</SkillName>
            </SkillItem>
          </SkillsList>
          <Subtitle>Linguagens</Subtitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon><FaPython /></SkillIcon>
              <SkillName>Python</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiTypescript /></SkillIcon>
              <SkillName>TypeScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaJs /></SkillIcon>
              <SkillName>JavaScript</SkillName>
            </SkillItem>
          </SkillsList>
          <Subtitle>Outros</Subtitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon><SiMysql /></SkillIcon>
              <SkillName>SQL Server</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaAws /></SkillIcon>
              <SkillName>AWS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaDocker /></SkillIcon>
              <SkillName>Kubernetes</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaDocker /></SkillIcon>
              <SkillName>Proxmox</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaDocker /></SkillIcon>
              <SkillName>Ubuntu</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsSection>
      </Content>
    </AboutContainer>
  );
};

export default About;
