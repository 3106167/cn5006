import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

// Import all user-defined components from the 'components' folder
import AddBook from "./components/AddBook";         // Route: /
import BookUpdate from "./components/BookUpdate";   // Route: /edit/:id
import DeleteBook from "./components/DeleteBook";   // Route: /Delete/:id
import DsplyBk_fncCompt from "./components/DsplyBk_fncCompt"; // Route: /DisplayBooksF1

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center>
            <h2>On-Line Book Library using React</h2>
          </center>
          <br />

          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            {/* Link 1: Add Book */}
            <Link to="/" className="navbar-brand text-white mx-3">
              <h4>Add a Book</h4>
            </Link>
            {/* Link 2: Display All books */}
            <Link to="/DisplayBooksF1" className="navbar-brand text-white">
              <h4>Display All books</h4>
            </Link>
          </nav>
          <br />

          {/* Route Definitions */}
          <Routes>
            {/* 1. Add Book (Default Path) */}
            <Route path="/" element={<AddBook />} /> 
            
            {/* 2. Display All Books */}
            <Route path="/DisplayBooksF1" element={<DsplyBk_fncCompt />} />
            
            {/* 3. Edit/Update Route (requires a book ID) */}
            <Route path="/edit/:id" element={<BookUpdate />} /> 

            {/* 4. Delete Route (requires a book ID) */}
            <Route path="/Delete/:id" element={<DeleteBook />} />
          </Routes>
        </div>
      </Router>
    );
  }
}