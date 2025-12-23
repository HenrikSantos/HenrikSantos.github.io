import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import ScrollProgress from "./components/ScrollProgress";
import GradientMesh from "./components/GradientMesh";

function App() {
  return (
    <>
      <ScrollProgress />
      <GradientMesh />
      <MobileMenu />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
