import axios from "axios";

export default {
    // Saves user info to the database
    createNewUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // update user info by id
    updateUser: function (userData) {
        return axios.put("/api/user/update", userData);
    },
    // Gets all users by role
    getRole: function (role) {
        return axios.get("/api/users/role/" + role);
    },
    // Gets user by id
    getProfile: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Gets pets by owner_id
    getPets: function (owner_id) {
        return axios.get("/api/pets/" + owner_id);
    },
    // Gets reviews by owner_id
    getReviews: function (owner_id) {
        return axios.get("/api/reviews/" + owner_id);
    },
    // Gets avg rating by owner_id
    getRating: function (owner_id) {
        return axios.get("/api/reviews/avgRating/" + owner_id);
    },
    //   // Deletes the book with the given id
    //   deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    //   // Saves a book to the database
    //   saveBook: function (bookData) {
    //     return axios.post("/api/books", bookData);
    //   }
};
