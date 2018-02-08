import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/aboutme">About Me</Link>
                </div>
                <div>
                <Link to="/projects">Projects</Link>
                </div>
            </div>
        );
    }
}

export default Nav;