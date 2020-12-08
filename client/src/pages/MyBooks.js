import React, { useState, useEffect } from "react";
import BookResults from "../components/bookResults";
import Modal from "../components/Modal";
import API from "../utils/API";
import UseContext from "../utils/useContext";

function MyBooks() {
  const [apiBooks, setApiBooks] = useState([]);
  const [activateModal, setActivateModal] = useState(false);

  useEffect(() => {
    getSavedBooks();
  }, [activateModal]);

  function handleCloseModal() {
    setActivateModal(false);
  }

  function getSavedBooks() {
    API.findAllSavedBooks()
      .then((resp) => {
        setApiBooks(resp.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteBook(event) {
    const bookID = event.target.value;
    API.removeBook(event.target.value)
      .then((resp) => {
        if (resp.data._id === bookID) {
          setActivateModal(true);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h1 className="text-center">Google Books Search</h1>
      <UseContext.Provider value={{ apiBooks, handleDeleteBook }}>
        <BookResults saveOrDelete={false} />
      </UseContext.Provider>
      <Modal
        title={"Book has been deleted!"}
        active={activateModal}
        closeButton={handleCloseModal}
      >
        The book is deleted.
      </Modal>
    </div>
  );
}

export default MyBooks;
