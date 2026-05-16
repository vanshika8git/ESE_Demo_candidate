import { useState } from "react";

import API from "../services/api";

function CandidateForm({ fetchCandidates }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await API.post("/candidates", {
        ...formData,

        skills: formData.skills
          .split(",")
          .map(skill => skill.trim())
      });

      alert("✅ Candidate Added Successfully");

      setFormData({
        name: "",
        email: "",
        skills: "",
        experience: "",
        bio: ""
      });

      fetchCandidates();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <h2>👨‍💻 Add Candidate</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Candidate Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Short Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          ➕ Add Candidate
        </button>
      </form>
    </div>
  );
}

export default CandidateForm;