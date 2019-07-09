import axios from "axios";

export default {
    // Saves user info to the database
    createNewUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};