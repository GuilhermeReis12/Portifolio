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
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Form = styled.form`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contato</Title>
      <Form>
        <Input type="text" name="name" placeholder="Seu Nome" required />
        <Input type="email" name="email" placeholder="Seu E-mail" required />
        <TextArea name="message" rows="6" placeholder="Sua Mensagem" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
