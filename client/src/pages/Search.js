import React, { Component } from "react";

import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import { Card, Col, Row, Container } from "react-bootstrap";

class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBooks(this.state.title)
      .then((res) => {
        this.setState({
          books: res.data.items,
          title: "",
        });
      })
      .catch((err) => console.log(err));
  };

  handleSave = (bookData) => {
    API.saveBook(bookData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <h1 className="text-center">Google Books Search</h1>
        <Row fluid>
          <Col size="12">
            <SearchForm
              value={this.state.title}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Search Results">
                {this.state.books.map((book) => (
                  <BookDetail
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSave={() =>
                      this.handleSave({
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        description: book.volumeInfo.description,
                        link: book.volumeInfo.infoLink,
                      })
                    }
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Search Results"></Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
