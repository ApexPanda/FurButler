import React from "react";

function NoMatch() {
    return (
        <div class="container">
            <div class="row">
                <div class="col s12 m6 offset-m3">
                    <div class="card butlr-blue">
                        <div class="card-content white-text">
                            <span class="card-title font3">Oops...</span>
                            <h3 class="font2">404 Not Found <span role="img" aria-label="Face with rolling eyes"> 🙄</span></h3>
                        </div>
                        <div class="card-action">
                            <a href="/" class="waves-effect waves-light btn butlr-green font2"><i class="material-icons left">home</i>Back
            To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;