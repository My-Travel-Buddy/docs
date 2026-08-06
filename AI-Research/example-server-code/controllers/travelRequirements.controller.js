const { getTravelRequirementSources } = require("../services/travelRequirements.service");

function listOfficialSources(req, res) {
  return res.status(200).json({
    success: true,
    data: getTravelRequirementSources(req.query.destination)
  });
}

module.exports = { listOfficialSources };
