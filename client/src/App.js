import './App.css';
import Landing from "./pages/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>

        <footer className="bg-black" style={{ height: "150px" }}>
          <h3 className="text-center v-center text-light" style={{ textDecoration: "underline" }}>Copyright &copy;</h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
