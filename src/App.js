import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./components/Todos/ListTodo";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import DetailUser from "./components/Users/DetailUser";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todos">
                            <ListTodo />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users" exact>
                            <Users />
                        </Route>
                        <Route path="/users/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </Router>
    );
};

export default App;
