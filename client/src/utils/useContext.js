import React from "react";

const UseContext = React.createContext({
  apiBooks: [],
  handleSaveBook: () => {},
  handleDeleteBook: () => {},
});

export default UseContext;
