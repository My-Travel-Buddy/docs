const itinerarySchema = {
  type: "object",
  additionalProperties: false,
  required: ["destination", "summary", "days", "checklist", "disclaimer"],
  properties: {
    destination: { type: "string" },
    summary: { type: "string" },
    days: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["dayNumber", "date", "activities"],
        properties: {
          dayNumber: { type: "integer" },
          date: { type: "string" },
          activities: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              required: ["title", "category", "description", "startTime", "estimatedCost", "notes"],
              properties: {
                title: { type: "string" },
                category: {
                  type: "string",
                  enum: ["Food", "Sightseeing", "Culture", "Adventure", "Shopping", "Transportation", "Entertainment", "Other"]
                },
                description: { type: "string" },
                startTime: { type: ["string", "null"] },
                estimatedCost: { type: ["number", "null"] },
                notes: { type: ["string", "null"] }
              }
            }
          }
        }
      }
    },
    checklist: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["text", "category"],
        properties: {
          text: { type: "string" },
          category: {
            type: "string",
            enum: ["Documents", "Clothing", "Health", "Money", "Technology", "Transportation", "Other"]
          }
        }
      }
    },
    disclaimer: { type: "string" }
  }
};

module.exports = itinerarySchema;
