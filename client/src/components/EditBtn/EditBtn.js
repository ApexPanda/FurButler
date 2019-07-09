import React from "react";

function EditBtn(props) {

    const handleClick = () => {
        console.log("clicked edit");
    };

    return (

        <button className="btn-flat right butlr-green-text">EDIT<i
            className="material-icons right" onClick={handleClick}>edit</i></button>
    );
}

export default EditBtn;