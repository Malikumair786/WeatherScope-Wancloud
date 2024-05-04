import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext"; // Adjust the path as necessary
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import SearchComponent from "scenes/search";
import NotFound from "scenes/notFound";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="weather-lookup" element={<SearchComponent />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
