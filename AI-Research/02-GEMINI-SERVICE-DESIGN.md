# Gemini Service Design

## Backend flow

```text
React trip form
→ POST /api/ai/itinerary
→ Express validation
→ Gemini service
→ structured JSON response
→ server validation
→ frontend review
→ user chooses what to save
```

## Gemini responsibilities

Gemini may generate:

- destination summary
- itinerary days
- suggested activities
- rough estimated costs
- packing suggestions
- general planning tips

Gemini must not claim:

- guaranteed visa eligibility
- official passport requirements
- official vaccination requirements
- medical clearance
- guaranteed border admission

## Recommended response shape

```json
{
  "destination": "Tokyo, Japan",
  "summary": "A three-day culture and food itinerary.",
  "days": [
    {
      "dayNumber": 1,
      "date": "2026-10-12",
      "activities": [
        {
          "title": "Visit Senso-ji",
          "category": "Culture",
          "description": "Explore the temple and surrounding area.",
          "startTime": "10:00",
          "estimatedCost": 0,
          "notes": null
        }
      ]
    }
  ],
  "checklist": [
    {
      "text": "Verify official entry requirements",
      "category": "Documents"
    }
  ],
  "disclaimer": "Generated planning suggestions only."
}
```

## Implementation rules

- Keep provider code in one service file.
- Keep the model name in `GEMINI_MODEL`.
- Validate the request before calling Gemini.
- Validate the response before returning it.
- Return a general `502` message when the provider fails.
- Log errors without logging API keys or sensitive user data.
