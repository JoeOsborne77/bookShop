import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import AllBooks from "./components/allbooks";
import IndividualBook from "./components/individualbook";
import AllAuthors from "./components/allauthors";
import IndividualAuthor from "./components/individualauthor";
import CreateBook from "./components/createbook";

import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/books" exact element={<AllBooks />} />
          <Route path="/books/:id" exact element={<IndividualBook />} />
          <Route path="/createbook" exact element={<CreateBook />} />
          <Route path="/authors/" exact element={<AllAuthors />} />
          <Route path="/authors/:id" exact element={<IndividualAuthor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
