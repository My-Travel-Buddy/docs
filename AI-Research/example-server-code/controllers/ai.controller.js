const { generateItinerary } = require("../services/ai.service");

async function createItinerary(req, res) {
  try {
    const itinerary = await generateItinerary(req.body);
    return res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    const status = error.status || 502;
    if (status >= 500) console.error("AI itinerary generation failed:", error.message);

    return res.status(status).json({
      success: false,
      message: status === 400 ? error.message : "The itinerary service is temporarily unavailable",
      errors: error.details || []
    });
  }
}

module.exports = { createItinerary };
