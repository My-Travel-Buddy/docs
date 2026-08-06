# AI Integration — Start Here

## Final provider decision

My Travel Buddy uses **one generative-AI provider: the Gemini Developer API**.

Gemini is used for:

- day-by-day itinerary generation
- activity suggestions
- packing and preparation suggestions
- destination summaries
- personalization by interests, budget, and trip length

Gemini is not used as the authoritative source for visa, passport, vaccination, legal-entry, or medical requirements.

## Supporting travel-data source

The project uses the **Travel Buddy API** as the primary MVP candidate for structured visa and entry-planning data.

Official verification links must also be shown because travel rules can change.

## Official verification sources

- IATA Travel Centre
- CDC Travelers' Health
- World Health Organization
- U.S. Department of State
- destination-government and embassy websites

## Proposed endpoints

```http
POST /api/ai/itinerary
GET  /api/travel-requirements
```

## Read in this order

1. `01-GEMINI-API-SETUP.md`
2. `02-GEMINI-SERVICE-DESIGN.md`
3. `03-TRAVEL-REQUIREMENTS-RESEARCH.md`
4. `04-AI-TRAVEL-DATA-DECISION.md`
5. `05-SAFETY-COST-AND-VALIDATION.md`
