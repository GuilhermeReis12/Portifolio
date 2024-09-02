import styled from "styled-components";

const ContactContainer = styled.div`
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
  background: rgba(0, 0, 0, 0.8); 
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const InfoItem = styled.div`
  margin-bottom: 15px;
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
        <InfoItem>
          <InfoTitle>Email</InfoTitle>
          <InfoText>guilhermeoliveira12102001@gmail.com</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>WhatsApp</InfoTitle>
          <InfoText>+55 31 992326522</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Localização</InfoTitle>
          <InfoText>Belo Horizonte, MG, Brasil</InfoText>
        </InfoItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
