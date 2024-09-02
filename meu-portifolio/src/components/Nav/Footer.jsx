import { FooterContainer, FooterText, FooterLink } from "./footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024 Guilherme Reis. Todos os direitos reservados.
      </FooterText>
      <FooterText>
        Siga-me em:
        <FooterLink
          href="https://github.com/GuilhermeReis12"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>{" "}
        |
        <FooterLink
          href="https://www.linkedin.com/in/guilherme-reis-b26261197/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
