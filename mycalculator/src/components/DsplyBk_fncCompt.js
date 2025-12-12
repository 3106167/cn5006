import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

// API_URL should match your backend server address
const API_URL = "http://localhost:4000/api/books";

const DsplyBk_fncCompt = () => {
  // State to hold the array of books
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs once when the component mounts to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/displayall`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch book data. Check console and server status.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return <div className="container mt-4">Loading books...</div>;
  }

  return (
    <div className="container mt-4">
      <h3>All Books in the Library</h3>
      {/* Pass the fetched book data to the DisplayData component */}
      <DisplayData myBookData={books} />
    </div>
  );
};

export default DsplyBk_fncCompt;