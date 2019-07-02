import React from "react";
import ServiceButton from "../components/ServiceButton";
// eslint-disable

function Home() {
    return (
        <div className="container">
            <div className="row left-margin-0">
                <div className="col s12 m6 white-text font2 left">
                    <p className="main-text">
                        Everything your pet needs, all in one place.
      </p>
                </div>
            </div>

            <div className="row">
                <ServiceButton
                    role="Groomers"
                    url="./profileResults?role=Groomer"
                />
                <ServiceButton
                    role="Walkers"
                    url="./profileResults?role=Walker"
                />
                <ServiceButton
                    role="Sitters"
                    url="./profileResults?role=Sitter"
                />
                <ServiceButton
                    role="Vets"
                    url="./profileResults?role=Veterinarian"
                />
                <ServiceButton
                    role="Kennels"
                    url="./profileResults?role=Kennel"
                />
                <ServiceButton
                    role="Parks"
                    url="./profileResults?role=Park"
                />
                <ServiceButton
                    role="Owners"
                    url="./profileResults?role=Owner"
                />
            </div>

        </div>
    );
}

export default Home;