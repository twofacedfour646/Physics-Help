import './App.css';
import Landing from "./pages/Landing.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
			<Navbar />
      <Landing />
      <footer className="bg-dark" style={{ height: "150px" }}>
        <h3 className="text-center v-center text-light">Copyright &copy;</h3>
			</footer>
    </div>
  );
}

export default App;
