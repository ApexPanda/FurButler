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
                    url="./profileResults?role=Groomer"
                />
                <ServiceBtnA
                    role="Walkers"
                    url="./profileResults?role=Walker"
                />
                <ServiceBtnA
                    role="Sitters"
                    url="./profileResults?role=Sitter"
                />
                <ServiceBtnB
                    role="Vets"
                    url="./profileResults?role=Veterinarian"
                />
                <ServiceBtnA
                    role="Kennels"
                    url="./profileResults?role=Kennel"
                />
                <ServiceBtnA
                    role="Parks"
                    url="./profileResults?role=Park"
                />
                <ServiceBtnB
                    role="Owners"
                    url="./profileResults?role=Owner"
                />
            </div>

        </div>
    );
}

export default Home;