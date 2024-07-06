import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Container from "./components/Container";
import Opportunities from "./components/Opportunities";
import Videos from "./components/Videos";
import Books from "./components/Books";
import Informed from "./components/Informed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#fcd580]">
      <NavBar />
      <Content />
      <Container />
      <Opportunities />
      <Videos />
      <Books />
      <Informed />
      <Footer />
    </div>
  );
}

export default App;
