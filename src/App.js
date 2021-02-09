import React from "react";
import "./App.css";
import FavoritesContainer from "./Containers/FavoritesContainer";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import MainContainer from "./Containers/MainContainer";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import PlantDetails from "./Components/PlantDetails";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Checkout from "./Components/Checkout";
import Account from "./Components/Account";
import EmptyCart from "./Components/EmptyCart";
import About from "./Components/About";
import Footer from "./Components/Footer";
import PayPal from "./Components/PayPal";

const URL = "https://iplant-backend.herokuapp.com";

class App extends React.Component {
  state = {
    cart: [],
    favorites: [],
    userid: null,
    user: null,
  };

  componentDidMount() {
    fetch('https://iplant-backend.herokuapp.com/users/1')
    .then(resp => resp.json())
    .then(userData => {
      this.setState({cart: userData.transactions, favorites: userData.favorites})
    })
  }

  addToCart = (plant) => {
    const newCart = {
      transaction: { plant_id: plant.id, user_id: this.state.userid },
    };
    fetch(`${URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => {
          return { cart: [...prevState.cart, data] };
        });
      });
  };

  removeFromCart = (plant) => {
    const cartItem = this.state.cart.find((item) => item.plant.id === plant.id);
    fetch(`${URL}/transactions/${cartItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((item) => {
        this.setState((prevState) => {
          return {
            cart: prevState.cart.filter((item) => item.id !== cartItem.id),
          };
        });
      });
  };

  clearCart = () => {
    let cartPlants = this.state.cart.map((plant) => plant.plant);
    cartPlants.forEach((plant) => this.removeFromCart(plant));
  };

  addFavorite = (plant) => {
    const newFavorite = {
      favorite: { plant_id: plant.id, user_id: this.state.userid },
    };
    fetch(`${URL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavorite),
    })
      .then((resp) => resp.json())
      .then((favorite) => {
        this.setState((prevState) => {
          return { favorites: [...prevState.favorites, favorite] };
        });
      });
  };

  removeFavorite = (plant) => {
    const foundFavorite = this.state.favorites.find(
      (favorite) => favorite.plant.id === plant.id
    );
    fetch(`${URL}/favorites/${foundFavorite.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((favorite) => {
        this.setState((prevState) => {
          return {
            favorites: prevState.favorites.filter(
              (fav) => fav.id !== foundFavorite.id
            ),
          };
        });
      });
  };
  //
  handleSubmit = (data, route, method = "POST") => {
    fetch(`${URL}${route}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((user) => {
        const favorites = user.favorites ? user.favorites : [];
        const transactions = user.transactions ? user.transactions : [];
        this.setState({
          userid: user.id,
          favorites: favorites,
          cart: transactions,
          user: user,
        });
      })
      .catch((errors) => console.log(errors));
  };

  handleLogout = () => {
    this.setState({ userid: null, favorites: [], cart: [], user: null });
    return <Redirect to="/" push={true} />;
  };

  render() {
    let { cart } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar userid={this.state.userid} />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/all-plants"
                component={() => (
                  <MainContainer
                    cart={cart}
                    addFavorite={this.addFavorite}
                    addToCart={this.addToCart}
                  />
                )}
              />
              <Route exact path="/all-plants/:id" component={PlantDetails} />
              <Route
                exact
                path="/my-picks"
                component={() => (
                  <FavoritesContainer
                    favorites={this.state.favorites.map(
                      (favorite) => favorite.plant
                    )}
                    removeFavorite={this.removeFavorite}
                  />
                )}
              />
              <Route
                exact
                path="/my-cart"
                component={() =>
                  cart.length === 0 ? (
                    <EmptyCart />
                  ) : (
                    <Cart
                      cart={cart}
                      removeFromCart={this.removeFromCart}
                      clearCart={this.clearCart}
                    />
                  )
                }
              />
              <Route
                exact
                path="/checkout"
                component={() => (
                  <Checkout
                    cart={cart}
                    clearCart={this.clearCart}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                component={() =>
                  this.state.userid ? (
                    <Redirect to="/" push={true} />
                  ) : (
                    <Signup handleSubmit={this.handleSubmit} />
                  )
                }
              />
              <Route
                exact
                path="/login"
                component={() =>
                  this.state.userid ? (
                    <Redirect to="/" push={true} />
                  ) : (
                    <Login handleSubmit={this.handleSubmit} />
                  )
                }
              />
              <Route
                exact
                path="/account"
                component={() =>
                  this.state.userid ? (
                    <Account
                      handleSubmit={this.handleSubmit}
                      user={this.state.user}
                    />
                  ) : (
                    <Redirect to="/login" push={true} />
                  )
                }
              />
              <Route
                exact
                path="/logout"
                component={() => this.handleLogout()}
              />
              <Route exact path="/about-us" component={About} />
              <Route
                exact
                path="/paypal"
                component={() => <PayPal clearCart={this.clearCart} />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
