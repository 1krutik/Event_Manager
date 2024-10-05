import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

import "./Navigation.css";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="Navigation">
                <Link to="/" className="logo">
                    <img src="https://www.zarla.com/images/zarla-top-events-1x1-2400x2400-20211123-4fgq7httf3p79gk64jb6.png?crop=1:1,smart&width=250&dpr=2" alt="alt"/>
                    <p>EVENTS</p>
                </Link>
                <ul>
                    {!this.props.isLoggedIn && <Link to="/register" className="links">Register</Link>}
                    {!this.props.isLoggedIn && <Link to="/login" className="links">Login</Link>}
                    {this.props.isLoggedIn && <Link to="/create" className="links">Create</Link>}
                    {this.props.isLoggedIn && <Link to="/profile" className="links">Profile</Link>}
                    {this.props.isLoggedIn && <Link to="/logout" className="links">Logout</Link>}
                </ul>
            </nav>
        )
    }
}

export default Navigation;