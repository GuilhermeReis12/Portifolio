
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Background />
      <Header />
        <AppRoutes />
        <div style={{marginTop:"150px"}} />
      <Footer />
    </div>
  );
}

export default App;
