import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Main></Main>

      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
