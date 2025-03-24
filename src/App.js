import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Login from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/services" component={Services} />
          <ProtectedRoute exact path="/contact" component={Contact} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/Not-Found" component={NotFound} />
          <Redirect to="/Not-Found" />
        </Switch>
      </div>
    );
  }
}

export default App;
