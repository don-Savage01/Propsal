import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProposalPage from "./components/ProposalPage";
import YesPage from "./components/YesPage";
import NoPage from "./components/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
