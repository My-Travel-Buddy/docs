const router = require("express").Router();
const { listOfficialSources } = require("../controllers/travelRequirements.controller");

router.get("/sources", listOfficialSources);

module.exports = router;
