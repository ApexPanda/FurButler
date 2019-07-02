import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo from "../../images/logo/logoFinal.png";
import M from 'materialize-css';

class Nav extends Component {

    componentDidMount() {
        //Auto initialize all materialize components
        M.AutoInit();
    }

    render() {
        return (
            <>
                {/* Main Dropdown Structure */}
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="./profileResults?role=Walker">Walkers</Link></li>
                    <li><a href="./profileResults?role=Groomer">Groomers</a></li>
                    <li><a href="./profileResults?role=Sitter">Sitters</a></li>
                    <li><a href="./profileResults?role=Veterinarian">Veterinarians</a></li>
                    <li><a href="./profileResults?role=Kennel">Kennels</a></li>
                    <li><a href="./profileResults?role=Park">Pet Friendly Parks</a></li>
                    <li><a href="./profileResults?role=Owner">Pet Owners</a></li>
                </ul>
                {/* collapsable sidebar */}
                <ul id="dropdown2" className="dropdown-content">
                    <li><a href="./profileResults?role=Walker">Walkers</a></li>
                    <li><a href="./profileResults?role=Groomer">Groomers</a></li>
                    <li><a href="./profileResults?role=Sitter">Sitters</a></li>
                    <li><a href="./profileResults?role=Veterinarian">Veterinarians</a></li>
                    <li><a href="./profileResults?role=Kennel">Kennels</a></li>
                    <li><a href="./profileResults?role=Park">Pet Friendly Parks</a></li>
                    <li><a href="./profileResults?role=Owner">Pet Owners</a></li>
                </ul>
                {/* Dropdown if logged in */}
                <ul id="dropdown3" className="dropdown-content">
                    <li><a id="user-profile-link" href="">View Profile</a></li>
                    <li><a id="user-edit-link" href="">Edit Profile</a></li>
                    <li>
                        <form method="POST" action="/api/logout">
                            <button className="font3" id="user-logout-dropdown" type="submit" name="action">Logout</button>
                        </form>
                    </li>
                </ul>

                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper font3">
                        <a href="/" className="brand-logo"><img src={logo} alt="Logo" height="64" /></a>
                        {/* collapse trigger */}
                        <a href="#" data-target="mobile-collapse" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {/* Dropdown Trigger */}
                            <li><a className="dropdown-trigger waves-effect" href="#!" data-target="dropdown1"><i
                                className="material-icons left">search</i>Search
                    Options<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li className="login-show hide"><a id="session-name" className="dropdown-trigger waves-effect" href="#!"
                                data-target="dropdown3">
                                Name<i className="material-icons right">arrow_drop_down</i></a></li>
                            {/* Modal Trigger */}
                            <li className="logout-show"><a className="waves-effect modal-trigger" href="#modal1">Login</a></li>

                            <li className="logout-show"><a className="waves-effect" href="/signUp">Sign-Up</a></li>
                            <li id="profile-nav-image" className="center login-show hide"></li>
                        </ul>
                    </div>
                </nav>

                {/* collapsable sidebar */}
                <ul className="sidenav" id="mobile-collapse">
                    <li><a className="dropdown-trigger-collapse" href="#!" data-target="dropdown2"><i
                        className="material-icons left">search</i>Search
            Options<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="logout-show"><a href="#modal1" className="modal-trigger">Loout</a></li>
                    <li className="logout-show"><a href="/signUp">Sign-Up</a></li>
                </ul>
                {/* END NAVBAR ========================================== */}

                {/* Modal Structure ================================ */}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 center">
                                    <h2 className="center-align font3">Login</h2>
                                    <div className="row">
                                        <form className="col s12" id="login-form">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="login-email" type="email" name="login-email" className="validate" required />
                                                    <label for="login-email">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="pass" type="password" name="pass" className="validate" required />
                                                    <label for="pass">Password</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col m12">
                                                    <p className="center-align">
                                                        <button className="btn btn-large waves-effect waves-light font2 butlr-green"
                                                            type="submit" name="action" id="login-submit">Login</button>
                                                    </p>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Modal =========================================== */}
            </>
        );
    }
}

export default Nav;
