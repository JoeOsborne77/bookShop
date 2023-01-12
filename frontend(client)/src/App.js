import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllBooks from "./components/allBooks";
import CreateBook from "./components/createBook";
import IndividualBook from "./components/IndividualBook";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="book">
          <Link to="/"> Home Page</Link>
          <Link to="/createbook"> Create A Book</Link>
          <Link to="/books"> See All Books</Link>
        </div>
        <Routes>
          <Route path="/books" exact element={<AllBooks />} />
          <Route path="/createbook" exact element={<CreateBook />} />
          <Route path="/books/:id" exact element={<IndividualBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
