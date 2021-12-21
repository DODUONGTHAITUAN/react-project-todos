import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
    render = () => {
        return (
            <div className="topnav">
                <NavLink exact={true} activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/todos">
                    Todos
                </NavLink>
                <NavLink activeClassName="active" to="/about">
                    About
                </NavLink>
                <NavLink activeClassName="active" to="/users">
                    Users
                </NavLink>
            </div>
        );
    };
}

export default Nav;
