const calculateMatchScore = (candidate, job) => {
    const requiredSkills = job.requiredSkills.map(skill =>
        skill.toLowerCase()
    );

    const candidateSkills = candidate.skills.map(skill =>
        skill.toLowerCase()
    );

    const matchedSkills = candidateSkills.filter(skill =>
        requiredSkills.includes(skill)
    );

    const skillScore =
        matchedSkills.length / requiredSkills.length;

    let experienceScore = 0;

    if (candidate.experience >= job.minExperience) {
        experienceScore = 1;
    }

    const totalScore =
        (skillScore * 0.8) + (experienceScore * 0.2);

    let ranking = "Low";

    if (totalScore >= 0.75) {
        ranking = "High";
    } else if (totalScore >= 0.4) {
        ranking = "Medium";
    }

    return {
        matchedSkills,
        matchScore: Number((totalScore * 100).toFixed(2)),
        ranking
    };
};

module.exports = calculateMatchScore;