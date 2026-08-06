# Server Integration

## Install

```bash
npm install openai express-rate-limit
```

## Environment

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.6-luna
```

## Mount in app.js

Add after `app.use(express.json())`:

```js
const aiRouter = require("./routes/ai.routes");
const travelRequirementsRouter = require("./routes/travelRequirements.routes");

app.use("/api/ai", aiRouter);
app.use("/api/travel-requirements", travelRequirementsRouter);
```

## Test official sources

```bash
curl "http://localhost:3000/api/travel-requirements/sources?destination=Japan"
```

## Test AI itinerary

```bash
curl -X POST http://localhost:3000/api/ai/itinerary \
  -H "Content-Type: application/json" \
  -d '{
    "destination": "Tokyo, Japan",
    "startDate": "2026-10-12",
    "endDate": "2026-10-14",
    "budgetLevel": "Mid-range",
    "interests": ["Culture", "Food"],
    "travelers": 2
  }'
```

## Limitation

This package does not call Timatic. Timatic requires separate access, commercial terms, and provider-specific API documentation. The included travel-requirements route returns official verification sources for the MVP.
