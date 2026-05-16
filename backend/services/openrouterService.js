// TODO: Implement openrouter service logic
const axios = require("axios");

const getAIShortlist = async (candidates, job) => {
    const formattedCandidates = candidates
        .map(
            (candidate, index) => `
${index + 1}. ${candidate.name}

Skills: ${candidate.skills.join(", ")}

Experience: ${candidate.experience} years

Bio: ${candidate.bio}
`
        )
        .join("\n");

    const prompt = `
You are an expert technical recruiter.

Job Requirements:
Required Skills: ${job.requiredSkills.join(", ")}

Minimum Experience: ${job.minExperience} years

Candidates:
${formattedCandidates}

Tasks:
1. Rank candidates from best to worst
2. Explain why each candidate fits the role
3. Mention strengths and weaknesses
4. Recommend top candidates
`;

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openrouter/free",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(error.response?.data || error.message);

        throw new Error("AI Shortlisting Failed");
    }
};

module.exports = getAIShortlist;