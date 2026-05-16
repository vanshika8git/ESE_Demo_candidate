import { useState } from "react";

import API from "../services/api";

function JobForm({ setResults, setAiResult, setIsLoading }) {
  const [jobData, setJobData] = useState({
    requiredSkills: "",
    minExperience: ""
  });

  const handleChange = e => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleBasicMatch = async () => {
    try {
      const res = await API.post("/match", {
        requiredSkills: jobData.requiredSkills
          .split(",")
          .map(skill => skill.trim()),

        minExperience: Number(
          jobData.minExperience
        )
      });

      setResults(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAiMatch = async () => {
    try {
      setAiResult(""); // Clear previous result
      setIsLoading(true);

      const res = await API.post("/match/ai", {
        requiredSkills: jobData.requiredSkills
          .split(",")
          .map(skill => skill.trim()),

        minExperience: Number(
          jobData.minExperience
        )
      });

      setAiResult(res.data.aiResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="card">
      <h2>🎯 Job Requirement</h2>

      <input
        type="text"
        placeholder="Required Skills"
        name="requiredSkills"
        value={jobData.requiredSkills}
        onChange={handleChange}
      />

      <input
        type="number"
        placeholder="Minimum Experience"
        name="minExperience"
        value={jobData.minExperience}
        onChange={handleChange}
      />

      <div className="btn-group">
        <button onClick={handleBasicMatch}>
          📊 Basic Match
        </button>

        <button onClick={handleAiMatch}>
          🤖 AI Match
        </button>
      </div>
    </div>
  );
}

export default JobForm;