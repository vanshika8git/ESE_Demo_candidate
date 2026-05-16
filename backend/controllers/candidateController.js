// TODO: Implement candidate controller logic
const Candidate = require("../models/Candidate");

const addCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.create(req.body);

        res.status(201).json({
            success: true,
            candidate
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();

        res.status(200).json({
            success: true,
            candidates
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addCandidate,
    getCandidates
};