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
import ContextData from "./ContextData";
import "./App.css";

let cartData = [
  { name: "Kiran", city: "Tiruvuru", age: 22 },
  { name: "Mahesh", city: "Rjy", age: 20 },
];
class App extends Component {
  state = { cartData: cartData };
  addData = (d) => {
    console.log(d);
  };

  deleteItem = (d) => {
    const l = cartData.filter((each) => each.name !== d);
    this.setState({ cartData: l });
  };

  render() {
    const { cartData } = this.state;
    console.log(cartData);
    return (
      <ContextData.Provider
        value={{
          addData: this.addData,
          deleteItem: this.deleteItem,
          cartData,
        }}
      >
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
      </ContextData.Provider>
    );
  }
}

export default App;
