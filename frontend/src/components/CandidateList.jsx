function CandidateList({ candidates }) {
  return (
    <div className="card">
      <h2>📋 Candidate List</h2>

      {candidates.map(candidate => (
        <div className="candidate-box" key={candidate._id}>
          <h3>{candidate.name}</h3>

          <p>📧 {candidate.email}</p>

          <p>
            🛠️ {candidate.skills.join(", ")}
          </p>

          <p>
            💼 {candidate.experience} Years
          </p>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;