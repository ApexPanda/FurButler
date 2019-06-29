import React from "react";

function NoMatch() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card butlr-blue">
                        <div className="card-content white-text">
                            <span className="card-title font3">Oops...</span>
                            <h3 className="font2">404 Not Found <span role="img" aria-label="Face with rolling eyes"> 🙄</span></h3>
                        </div>
                        <div className="card-action">
                            <a href="/" className="waves-effect waves-light btn butlr-green font2"><i className="material-icons left">home</i>Back
            To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;