# AI and Travel Data Decision

## Status

Accepted for the MVP, pending provider-key access and endpoint testing.

## Final architecture

```text
React
→ Express
   ├── Gemini Developer API
   └── Travel Buddy API
→ PostgreSQL
```

## Gemini

Responsible for:

- itinerary generation
- activity suggestions
- packing suggestions
- destination summaries
- personalization

## Travel Buddy API

Responsible for:

- visa-status planning data
- passport-to-destination comparisons
- eVisa and eTA information
- structured entry-rule data

## Official sources

Used for verification:

- IATA
- CDC
- WHO
- U.S. Department of State
- destination government or embassy

## Safety wording

Use:

> General planning guidance only. Visa, passport, vaccination, and entry requirements can change and may depend on nationality, residence, transit route, trip purpose, and personal circumstances. Verify requirements with the destination government, airline, embassy, or IATA before travel.

Do not use:

- Guaranteed entry
- Visa approved
- Official clearance
- No vaccines required
- Safe to travel
