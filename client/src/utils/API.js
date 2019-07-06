import axios from "axios";

export default {
  // Gets all books
  getRole: function (role) {
    return axios.get("/api/users/role/" + role);
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
