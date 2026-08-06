const router = require("express").Router();
const aiRateLimit = require("../middleware/aiRateLimit");
const { createItinerary } = require("../controllers/ai.controller");

router.post("/itinerary", aiRateLimit, createItinerary);

module.exports = router;
