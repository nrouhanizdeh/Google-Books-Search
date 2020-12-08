import axios from "axios";

export default {
  searchGoogleBooks: function (selectValue, inputValue) {
    return axios.get("/googleBooks/" + selectValue + "/" + inputValue);
  },
  findAllSavedBooks: function () {
    return axios.get("/api/books/");
  },

  saveBook: function (bookObj) {
    return axios.post("/api/books/", bookObj);
  },

  findSavedBook: function (id) {
    return axios.get("/api/books" + id);
  },

  removeBook: function (id) {
    return axios.delete("api/books/" + id);
  },
};
