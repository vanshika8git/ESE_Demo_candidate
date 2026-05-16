import ReactMarkdown from "react-markdown";

function MatchResults({ results, aiResult, isLoading }) {
  return (
    <>
      {results && results.length > 0 && (
        <div className="card">
          <h2>🏆 Match Results</h2>
          {results.map((item, index) => (
            <div className="result-box" key={index}>
              <h3>{item.candidate.name}</h3>
              <p>
                🎯 Match Score:
                <span className="score">
                  {item.matchScore}%
                </span>
              </p>
              <p>
                🛠️ Matched Skills:
                {item.matchedSkills.join(", ")}
              </p>
              <p>
                📌 Ranking:
                <strong>
                  {item.ranking}
                </strong>
              </p>
            </div>
          ))}
        </div>
      )}

      {(aiResult || isLoading) && (
        <div className="card ai-recommendation-card">
          <h2>🤖 AI Recommendation</h2>
          <div className="ai-box">
            {isLoading ? (
              <div className="loading-container">
                <p className="loading-text">Please wait for a moment. Generating response...</p>
                <div className="loading-spinner"></div>
              </div>
            ) : (
              <div className="markdown-content">
                <ReactMarkdown>{aiResult}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MatchResults;