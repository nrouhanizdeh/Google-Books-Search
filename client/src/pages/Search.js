import React, { useState, useEffect } from "react";
import { Input, Select, Option } from "../components/SearchBar";
import BookResults from "../components/bookResults";
import Button from "../components/Button";
import Modal from "../components/Modal";
import API from "../utils/API";
import UseContext from "../utils/useContext";
import { Col, Row, Container } from "../components/Grid";

function Search() {
  const [selectOptions, setSelectOptions] = useState([]);
  const [apiSearchObj, setApiSearchObj] = useState({});
  const [apiBooks, setApiBooks] = useState([]);
  const [activateModal, setActivateModal] = useState(false);

  useEffect(() => {
    setSelectOptions(["Keyword", "Author", "Title", "Subject"]);
  }, [apiBooks]);

  function handleCloseModal() {
    setActivateModal(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setApiSearchObj({ ...apiSearchObj, [name]: value });
  }

  function handleSelectChange(event) {
    const value = event.target.value;
    const name = "selectValue";
    setApiSearchObj({ ...apiSearchObj, [name]: value });
  }

  function handleSearchSubmit() {
    if (!apiSearchObj.selectValue || !apiSearchObj.inputValue) {
    } else {
      API.searchGoogleBooks(apiSearchObj.selectValue, apiSearchObj.inputValue)
        .then((respObj) => {
          setApiBooks(respObj.data);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleSaveBook(event) {
    const toSave = apiBooks.filter(
      (book) => book.googleID === event.target.value
    );

    API.saveBook(toSave[0]).then((resp) => {
      setActivateModal(true);
    });
  }

  return (
    <div>
      <div>
        <h1 className="text-center">Google Books Search</h1>
        <Row>
          <Col size="md-12 sm-12">
            <Container>
              <div className="level-right">
                <Select
                  onChange={handleSelectChange}
                  name={"name"}
                  value={apiSearchObj.selectValue}
                >
                  {selectOptions.map((value, index) => {
                    return (
                      <Option key={index} name={"name"} value={value}>
                        {" "}
                        {value}{" "}
                      </Option>
                    );
                  })}
                </Select>
              </div>

              <Input
                inputcolor={"is-success"}
                inputsize={"is-medium"}
                placeholder="Search for a book"
                onChange={handleInputChange}
                name={"inputValue"}
              ></Input>

              <Button
                customclass="button is-dark is-medium is-hovered"
                onClick={handleSearchSubmit}
              >
                Search
              </Button>
            </Container>
          </Col>
        </Row>
        <UseContext.Provider value={{ apiBooks, handleSaveBook }}>
          <BookResults saveOrDelete={true} />
        </UseContext.Provider>
      </div>
      <Modal
        title={"Saved the book!"}
        active={activateModal}
        closeButton={handleCloseModal}
      >
        This book has been saved.
      </Modal>
    </div>
  );
}

export default Search;
