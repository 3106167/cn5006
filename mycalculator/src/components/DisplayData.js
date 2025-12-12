import React from "react";
import { Link } from "react-router-dom";

// Helper Component to render a single row (Showbooks in your tutorial)
const Showbooks = ({ book }) => (
  <tr>
    {/* Note: MongoDB typically uses _id, but access it as book._id */}
    <td>{book._id}</td> 
    <td>{book.Title}</td>
    <td>{book.Author}</td>
    <td>{book.Price}</td>
    <td>{book.ISBN}</td>
    <td>
      {/* Edit Link: Navigates to the /edit/:id route */}
      <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm mx-2">
        Edit
      </Link>
      {/* Delete Link: Navigates to the /Delete/:id route */}
      <Link to={`/Delete/${book._id}`} className="btn btn-danger btn-sm">
        Delete
      </Link>
    </td>
  </tr>
);

const DisplayData = (props) => {
  // Destructure the myBookData prop (which is the array of books)
  const books = props.myBookData;

  return (
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the books array and call Showbooks for each book */}
        {books.map((book) => (
          <Showbooks book={book} key={book._id} />
        ))}
      </tbody>
    </table>
  );
};

export default DisplayData;