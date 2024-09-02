import styled from "styled-components";

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
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Projeto 1",
      description:
        "Descrição breve do Projeto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "path/to/image1.jpg",
      link: "#",
    },
    {
      title: "Projeto 2",
      description:
        "Descrição breve do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "path/to/image2.jpg",
      link: "#",
    },
    {
      title: "Projeto 3",
      description:
        "Descrição breve do Projeto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "path/to/image3.jpg",
      link: "#",
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Meus Projetos</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
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
