import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import ScrollProgress from "./components/ScrollProgress";
import GradientMesh from "./components/GradientMesh";
import { ActiveSectionProvider } from "./hooks/useActiveSection";

function App() {
  return (
    <ActiveSectionProvider>
      <ScrollProgress />
      <GradientMesh />
      <MobileMenu />
      <Header />
      <Main />
      <Footer />
    </ActiveSectionProvider>
  );
}

export default App;
