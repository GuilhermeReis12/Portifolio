import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

// eslint-disable-next-line react/prop-types
const CardHome = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

CardHome.Title = CardTitle;
CardHome.Content = CardContent;

export default CardHome;
