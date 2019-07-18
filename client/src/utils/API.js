import axios from "axios";

export default {
    // Saves/Posts new user info to the database
    createNewUser: function (userSignUpData) {
        return axios.post("/api/users", userSignUpData);
    },
    // Posts user login to userLoginRoutes
    postLogin: function (userLoginData) {
        return axios.post("/api/login", userLoginData);
    },
    // Gets user data from db to compare to login (from api-User-Routes)
    getSession: function () {
        return axios.get("/api/session");
    },
    // update user info by id
    updateUser: function (userData) {
        return axios.put("/api/user/update", userData);
    },
    // Gets all users by role
    getRole: function (role) {
        return axios.get("/api/users/role/" + role);
    },
    // Gets all users
    getAllUsers: function () {
        return axios.get("/api/users");
    },
    // Gets user image by id
    getImage: function (id) {
        return axios.get("/api/users/image/" + id);
    },
    // Gets user by id
    getProfile: function (id) {
        return axios.get("/api/users/" + id);
    },

    // Creates new Pet
    createNewPet: function (petData) {
        return axios.post("/api/pets", petData);
    },
    // Gets pets by owner_id
    getPets: function (owner_id) {
        return axios.get("/api/pets/" + owner_id);
    },
    // update pet info by id
    updatePet: function (petData) {
        return axios.put("/api/pet/update", petData);
    },
    // Deletes the pet with the given id
    deletePet: function (id) {
        return axios.delete("/api/pets/" + id);
    },
    // Creates new Review
    createNewReview: function (reviewData) {
        return axios.post("/api/reviews", reviewData);
    },
    // Gets reviews by owner_id
    getReviews: function (owner_id) {
        return axios.get("/api/reviews/" + owner_id);
    },
    // Gets avg rating by owner_id
    getRating: function (owner_id) {
        return axios.get("/api/reviews/avgRating/" + owner_id);
    },
    // Gets chat by id 
    getChats: function (id) {
        return axios.get("/api/chats" + id);
    },



};
