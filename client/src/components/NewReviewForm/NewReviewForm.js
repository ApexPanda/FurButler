import React, { Component } from "react";
import M from 'materialize-css';
import API from "../../utils/API";

class NewReviewForm extends Component {
    state = {
        title: "",
        review: "",
        rating: ""
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    addNewReview = (data) => {
        API.createNewReview(data)
            .then(res =>
                // this.props.handleEditOff()
                window.location.reload()

            )
            .catch(err => console.log(err));
    }



    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            title: this.state.title.trim(),
            rating: this.state.rating,
            review: this.state.review.trim()
        });

        let reviewData = {
            owner_id: this.props.ownerId,
            author_id: this.props.authorId,
            title: this.state.title,
            review: this.state.review,
            rating: this.state.rating,
        };

        if (this.state.title.length === 0 || this.state.review.length === 0 || !this.state.rating) {
            alert("All fields must be filled out.");
        } else {
            this.addNewReview(reviewData);
        }

    }

    render() {

        return (


            <div className="row card white" data-user-id={this.props.id}>
                <form className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="col s12">
                        <div className="white">

                            <div className="card-content">

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="title" type="text" className="validate" name="title" value={this.state.name} onChange={this.handleInputChange} />
                                        <label htmlFor="title" className="center-align active">Title</label>
                                    </div>
                                </div>
                                <div id="jobs-div" className="row">
                                    <div className="input-field col s12">
                                        <select name="rating" value="None" onChange={this.handleInputChange}>
                                            <option value="None" disabled>Select Option</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <label>Rating</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea id="review" type="text" className="validate" name="review" value={this.state.review} className="materialize-textarea long-text-box"
                            onChange={this.handleInputChange} placeholder="Type your review here" />
                        <label htmlFor="review">Review</label>

                        <div className="row">
                            <div className="input-field col s12">
                                <button data-about-id={this.props.id}
                                    className="about-save-btn waves-effect waves-light btn butlr-green right"
                                    type="submit"
                                    name="action">
                                    <i className="material-icons">done</i></button>
                                <button data-about-id={this.props.id}
                                    className="about-cancel-btn waves-effect waves-light btn grey right margin-right-5"
                                    onClick={(e) => this.props.handleReviewOff(e)}><i
                                        className="material-icons">clear</i></button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>

        );
    };
}

export default NewReviewForm;