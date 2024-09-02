import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import Background from "./components/Background";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 150px;
  margin-bottom: 150px;
`;

function App() {
  return (
    <AppContainer>
      <Background />
      <Header />
      <ContentWrapper>
        <AppRoutes />
      </ContentWrapper>
      <div style={{ marginTop: "150px" }} />
      <Footer />
    </AppContainer>
  );
}

export default App;
