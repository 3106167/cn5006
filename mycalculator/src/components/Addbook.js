import React, { useState } from "react";
import axios from "axios";

// API_URL should match your backend server address and API endpoint
const API_URL = "http://localhost:4000/api/books"; 

const AddBook = () => {
  // 1. Initialize state for book data
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Price: "",
    ISBN: ""
  });

  // 2. Handle input changes and update state
  const onChangeBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission (POST request)
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/addbooks`, book);
      console.log(res.data);
      alert("Book added successfully!");

      // Clear the form after submission
      setBook({ Title: "", Author: "", Price: "", ISBN: "" });

    } catch (error) {
      console.error("Error adding book:", error.response?.data || error.message);
      alert("Error adding book. Check console for details.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add New Book</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <label>Title: </label>
          <input 
            type="text"
            className="form-control"
            name="Title"
            value={book.Title}
            onChange={onChangeBook}
            required
          />
        </div>

        <div className="form-group">
          <label>Author: </label>
          <input 
            type="text"
            className="form-control"
            name="Author"
            value={book.Author}
            onChange={onChangeBook}
            required
          />
        </div>

        <div className="form-group">
          <label>Price: </label>
          <input 
            type="number"
            className="form-control"
            name="Price"
            value={book.Price}
            onChange={onChangeBook}
            required
          />
        </div>

        <div className="form-group">
          <label>ISBN: </label>
          <input 
            type="text"
            className="form-control"
            name="ISBN"
            value={book.ISBN}
            onChange={onChangeBook}
            required
          />
        </div>

        <div className="form-group mt-3">
          <input 
            type="submit" 
            value="Add Book" 
            className="btn btn-primary" 
          />
        </div>

      </form>
    </div>
  );
};

export default AddBook;