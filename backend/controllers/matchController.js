// TODO: Implement match controller logic
const Candidate = require("../models/Candidate");

const calculateMatchScore = require("../utils/matchLogic");

const getAIShortlist = require("../services/openrouterService");

const basicMatch = async (req, res) => {
    try {
        const { requiredSkills, minExperience } = req.body;

        const candidates = await Candidate.find();

        const results = candidates.map(candidate => {
            const matchResult = calculateMatchScore(
                candidate,
                {
                    requiredSkills,
                    minExperience
                }
            );

            return {
                candidate,
                ...matchResult
            };
        });

        results.sort(
            (a, b) => b.matchScore - a.matchScore
        );

        res.status(200).json({
            success: true,
            results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const aiShortlist = async (req, res) => {
    try {
        const job = req.body;

        const candidates = await Candidate.find();

        const aiResponse = await getAIShortlist(
            candidates,
            job
        );

        res.status(200).json({
            success: true,
            aiResponse
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    basicMatch,
    aiShortlist
};