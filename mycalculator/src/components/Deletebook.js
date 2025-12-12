import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// API_URL should match your backend server address
const API_URL = "http://localhost:4000/api/books";

const DeleteBook = () => {
  // Hooks to get ID from URL and navigate after deletion
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect runs when the component mounts
  useEffect(() => {
    const confirmAndDelete = async () => {
      // Show confirmation dialog before deleting
      const isConfirmed = window.confirm(
        `Are you sure you want to delete the book with ID: ${id}?`
      );

      if (isConfirmed) {
        try {
          const res = await axios.delete(`${API_URL}/deletebook/${id}`);
          console.log(res.data);
          alert(`Book deleted successfully: ${res.data.Title}`);
        } catch (error) {
          console.error("Error deleting book:", error.response?.data || error.message);
          alert("Error deleting book. Check console and server status.");
        }
      } else {
        alert("Deletion cancelled.");
      }

      // Always redirect back to the display page after confirmation/cancellation
      navigate("/DisplayBooksF1");
    };

    confirmAndDelete();
  }, [id, navigate]); // Dependencies ensure logic runs correctly

  // Display a message while the process is running
  return (
    <div className="container mt-4">
      <h3>Processing Deletion...</h3>
      <p>Redirecting you back to the book list.</p>
    </div>
  );
};

export default DeleteBook;