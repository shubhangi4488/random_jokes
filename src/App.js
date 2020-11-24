import './App.css';
import Navbar from "./shared/navbar";
import Jokeform from "./jokeform";
import Footer from "./shared/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jokeform />
      <Footer />
    </div>
  );
}

export default App;
