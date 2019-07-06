import React from "react";
import ServiceBtnA from "../components/ServiceBtnA";
import ServiceBtnB from "../components/ServiceBtnB";

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
                <ServiceBtnB
                    role="Groomers"
                    url="/results/Groomer"
                />
                <ServiceBtnA
                    role="Walkers"
                    url="/results/Walker"
                />
                <ServiceBtnA
                    role="Sitters"
                    url="/results/Sitter"
                />
                <ServiceBtnB
                    role="Vets"
                    url="/results/Veterinarian"
                />
                <ServiceBtnA
                    role="Kennels"
                    url="/results/Sitter"
                />
                <ServiceBtnA
                    role="Parks"
                    url="/results/Park"
                />
                <ServiceBtnB
                    role="Owners"
                    url="/results/Owner"
                />
            </div>

        </div>
    );
}

export default Home;