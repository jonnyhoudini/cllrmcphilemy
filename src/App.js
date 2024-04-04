import IssueForm from "./components/IssueForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import React, { useState, useEffect } from 'react';
import { getReports } from "./services/services";
import { Routes, Route } from "react-router-dom";

function App() {

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getReports().then((data) => {
      setIssues(data);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bins" element={<IssueForm category="bins" />} />
        <Route path="/grass" element={<IssueForm category="grass" />} />
        <Route path="/roads" element={<IssueForm category="roads" />} />
        <Route path="/lights" element={<IssueForm category="lights" />} />
        <Route path="/other" element={<IssueForm category="other" />} />
        <Route path="/housing" element={<IssueForm category="housing" />} />
        <Route path="/facilities" element={<IssueForm category="facilities" />} />
        <Route path="/dashboard" element={<Dashboard issues={issues} setIssues={setIssues} />} />
      </Routes>
    </div>
  );
}

export default App;
