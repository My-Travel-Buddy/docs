const getOpenAIClient = require("./openaiClient");
const itinerarySchema = require("./itinerarySchema");

const ALLOWED_BUDGET_LEVELS = new Set(["Budget", "Mid-range", "Luxury"]);

function validateInput(input) {
  const errors = [];

  if (!input || typeof input !== "object") return ["Request body is required"];

  if (typeof input.destination !== "string" || input.destination.trim().length < 2 || input.destination.trim().length > 100) {
    errors.push("Destination must be between 2 and 100 characters");
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.startDate || "")) errors.push("startDate must use YYYY-MM-DD");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.endDate || "")) errors.push("endDate must use YYYY-MM-DD");

  const start = new Date(`${input.startDate}T00:00:00Z`);
  const end = new Date(`${input.endDate}T00:00:00Z`);

  if (!Number.isNaN(start.valueOf()) && !Number.isNaN(end.valueOf())) {
    if (end < start) errors.push("endDate cannot be before startDate");
    const days = Math.floor((end - start) / 86400000) + 1;
    if (days > 14) errors.push("AI itinerary generation is limited to 14 days");
  }

  if (!ALLOWED_BUDGET_LEVELS.has(input.budgetLevel)) {
    errors.push("budgetLevel must be Budget, Mid-range, or Luxury");
  }

  if (!Number.isInteger(input.travelers) || input.travelers < 1 || input.travelers > 20) {
    errors.push("travelers must be an integer between 1 and 20");
  }

  if (!Array.isArray(input.interests) || input.interests.length > 10) {
    errors.push("interests must be an array with at most 10 items");
  } else if (input.interests.some((interest) => typeof interest !== "string" || interest.trim().length === 0 || interest.length > 40)) {
    errors.push("Each interest must be a nonempty string of 40 characters or fewer");
  }

  return errors;
}

function buildPrompt(input) {
  return [
    `Destination: ${input.destination}`,
    `Start date: ${input.startDate}`,
    `End date: ${input.endDate}`,
    `Budget level: ${input.budgetLevel}`,
    `Travelers: ${input.travelers}`,
    `Interests: ${input.interests.join(", ") || "General sightseeing"}`,
    "Create a realistic day-by-day itinerary.",
    "Keep activities geographically reasonable within each day.",
    "Do not claim visa, passport, vaccine, or entry information is official.",
    "Use estimated costs only as rough planning estimates."
  ].join("\n");
}

async function generateItinerary(input) {
  const errors = validateInput(input);
  if (errors.length) {
    const error = new Error("Invalid itinerary request");
    error.status = 400;
    error.details = errors;
    throw error;
  }

  const client = getOpenAIClient();
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
    store: false,
    instructions: "You are the itinerary-planning service for My Travel Buddy. Return practical, family-safe suggestions. Follow the supplied JSON schema exactly. Never present generated text as official visa, passport, vaccination, medical, or legal guidance.",
    input: buildPrompt({
      destination: input.destination.trim(),
      startDate: input.startDate,
      endDate: input.endDate,
      budgetLevel: input.budgetLevel,
      travelers: input.travelers,
      interests: input.interests.map((value) => value.trim())
    }),
    text: {
      format: {
        type: "json_schema",
        name: "travel_itinerary",
        strict: true,
        schema: itinerarySchema
      }
    }
  });

  if (!response.output_text) {
    const error = new Error("AI provider returned no itinerary");
    error.status = 502;
    throw error;
  }

  try {
    return JSON.parse(response.output_text);
  } catch {
    const error = new Error("AI provider returned an invalid itinerary");
    error.status = 502;
    throw error;
  }
}

module.exports = { generateItinerary, validateInput };
