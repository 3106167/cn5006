import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// API_URL should match your backend server address
const API_URL = "http://localhost:4000/api/books";

const BookUpdate = () => {
  // Hooks to get ID from URL and navigate after submission
  const { id } = useParams();
  const navigate = useNavigate();

  // State to hold the book data for editing
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Price: "",
    ISBN: ""
  });

  // 1. Fetch existing book data when the component loads
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/display/${id}`);
        // Set the state with the received data
        setBook({
            Title: response.data.Title,
            Author: response.data.Author,
            Price: response.data.Price,
            ISBN: response.data.ISBN,
        });
      } catch (error) {
        console.error("Error fetching book for update:", error);
        alert("Failed to load book data.");
      }
    };
    fetchBook();
  }, [id]); // Re-run effect if ID changes

  // 2. Handle input changes
  const onChangeBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission (PUT request)
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${API_URL}/update/${id}`, book);
      console.log(res.data);
      alert("Book updated successfully!");
      
      // Redirect to the display page
      navigate("/DisplayBooksF1"); 

    } catch (error) {
      console.error("Error updating book:", error.response?.data || error.message);
      alert("Error updating book. Check console for details.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Update Book: {id}</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <label>Title: </label>
          <input 
            type="text"
            className="form-control"
            name="Title"
            value={book.Title}
            onChange={onChangeBook}
          />
        </div>
        {/* ... (Add similar input fields for Author, Price, and ISBN) ... */}
        <div className="form-group">
          <label>Author: </label>
          <input 
            type="text"
            className="form-control"
            name="Author"
            value={book.Author}
            onChange={onChangeBook}
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
          />
        </div>

        <div className="form-group mt-3">
          <input 
            type="submit" 
            value="Update Book" 
            className="btn btn-success" 
          />
        </div>

      </form>
    </div>
  );
};

export default BookUpdate;