import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
