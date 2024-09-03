import styled from "styled-components";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  color: #ffffff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoItem = styled.a`
  margin-bottom: 15px;
  text-decoration: none;
  color: #d2e7ef;
  display: flex;
  align-items: center;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #e2d6d6; 
  }

  svg {
    margin-right: 10px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: 600;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contato</Title>
      <ContactInfo>
        <InfoItem href="mailto:guilhermeoliveira12102001@gmail.com">
          <FaEnvelope size={24} />
          <div>
            <InfoTitle>Email</InfoTitle>
            <InfoText>guilhermeoliveira12102001@gmail.com</InfoText>
          </div>
        </InfoItem>
        <InfoItem href="https://wa.me/5531992326522" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
          <div>
            <InfoTitle>WhatsApp</InfoTitle>
            <InfoText>+55 31 992326522</InfoText>
          </div>
        </InfoItem>
        <InfoItem href="https://www.google.com/maps?q=Belo+Horizonte,+MG,+Brasil" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt size={24} />
          <div>
            <InfoTitle>Localização</InfoTitle>
            <InfoText>Belo Horizonte, MG, Brasil</InfoText>
          </div>
        </InfoItem>
        <InfoItem href="https://www.linkedin.com/in/guilherme-reis-b26261197/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
          <div>
            <InfoTitle>LinkedIn</InfoTitle>
            <InfoText>/in/guilhermereis</InfoText>
          </div>
        </InfoItem>
        <InfoItem href="https://github.com/GuilhermeReis12" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
          <div>
            <InfoTitle>GitHub</InfoTitle>
            <InfoText>/GuilhermeReis12</InfoText>
          </div>
        </InfoItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
