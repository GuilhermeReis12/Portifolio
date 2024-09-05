import styled from "styled-components";
import { FaDatabase, FaNetworkWired, FaClipboardList } from "react-icons/fa";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-size: cover;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  background-size: cover;
  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: #ff5722;
  margin: 20px 0;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff5722;
  color: #fff;
  font-size: 1.1rem;
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

const Projects = () => {
  const projects = [
    {
      title: "Backup automático SQL",
      description:
        "Backup automático para bancos que estão em servidores ou local.",
      icon: <FaDatabase />,
      link: "https://github.com/GuilhermeReis12/backup_banco",
    },
    {
      title: "Monitoramento Ips",
      description:
        "Sistema que monitora os IPs da sua rede e verifica qual está disponível.",
      icon: <FaNetworkWired />,
      link: "https://github.com/GuilhermeReis12/Monitorar_IPs",
    },
    {
      title: "Criação da IA Jarvis",
      description:
        "Criei uma inteligencia artificial básica que funciona com o Chat Gpt J.A.R.V.I.S",
      icon: <FaClipboardList />,
      link: "https://github.com/GuilhermeReis12/J.A.R.V.I.S",
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Meus Projetos</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectIcon>{project.icon}</ProjectIcon>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Button href={project.link}>Ver Mais</Button>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
