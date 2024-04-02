import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
