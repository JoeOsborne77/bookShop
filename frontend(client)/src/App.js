import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllBooks from "./components/allBooks";
import CreateBook from "./components/createBook";

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
          <Route path="/book/:id" exact element={<individualBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
