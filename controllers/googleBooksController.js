const axios = require("axios");

const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

module.exports = {
  getBooks: function (req, res) {
    let setQuery = "";

    if (req.params.selectValue == "Title") {
      setQuery =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        req.params.inputValue +
        "+intitle:" +
        req.params.inputValue +
        "&printType=books&orderBy=relevance&key=" +
        apiKey;
    } else if (req.params.selectValue == "Author") {
      setQuery =
        "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" +
        req.params.inputValue +
        "&printType=books&orderBy=relevance&key=" +
        apiKey;
    } else if (req.params.selectValue == "Subject") {
      setQuery =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        req.params.inputValue +
        "+subject" +
        req.params.inputValue +
        "&printType=books&orderBy=relevance&key=" +
        apiKey;
    } else {
      setQuery =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        req.params.inputValue +
        "&printType=books&orderBy=relevance&key=" +
        apiKey;
    }
    axios
      .get(setQuery)
      .then((booksObj) => {
        const receivedData = booksObj.data.items;
        const newApiArr = receivedData.map((apiObject) => {
          let newApiObj = {
            authors: apiObject.volumeInfo.authors,
            description: apiObject.volumeInfo.description,
            image: apiObject.volumeInfo.imageLinks,
            link: apiObject.volumeInfo.infoLink,
            title: apiObject.volumeInfo.title,
            googleID: apiObject.id,
          };

          return newApiObj;
        });

        res.json(newApiArr);
      })
      .catch((err) => console.log(err));
  },
};
