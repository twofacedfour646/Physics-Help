import './App.css';
import Landing from "./pages/Landing.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
			<Navbar />
      <div className="container">
				<Landing />
			</div>
    </div>
  );
}

export default App;
