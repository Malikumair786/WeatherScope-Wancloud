import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center bg-secondary">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
