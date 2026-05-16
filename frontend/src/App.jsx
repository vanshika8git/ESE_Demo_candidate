import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";
import JobForm from "./components/JobForm";
import MatchResults from "./components/MatchResults";

import API from "./services/api";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState([]);
  const [aiResult, setAiResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCandidates = async () => {
    try {
      const res = await API.get("/candidates");
      setCandidates(res.data.candidates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Candidate Info Page (Home) */}
        <Route
          path="/"
          element={
            <div className="container">
              <div className="left-section">
                <CandidateForm fetchCandidates={fetchCandidates} />
              </div>
              <div className="right-section">
                <CandidateList candidates={candidates} />
              </div>
            </div>
          }
        />

        {/* Shortlisting Page */}
        <Route
          path="/shortlisting"
          element={
            <div className="container">
              <div className="section-2-3">
                <JobForm 
                  setResults={setResults} 
                  setAiResult={setAiResult} 
                  setIsLoading={setIsLoading}
                />
                <MatchResults aiResult={aiResult} isLoading={isLoading} />
              </div>
              <div className="section-1-3">
                <MatchResults results={results} />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}


export default App;




