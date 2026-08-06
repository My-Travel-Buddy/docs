# Gemini API Setup

## Official access

- Gemini API documentation: https://ai.google.dev/gemini-api/docs
- Google AI Studio: https://aistudio.google.com/
- API keys: https://aistudio.google.com/app/apikey
- Model catalog: https://ai.google.dev/gemini-api/docs/models
- Pricing: https://ai.google.dev/gemini-api/docs/pricing
- Rate limits: https://ai.google.dev/gemini-api/docs/rate-limits

## Install

From the Server repository:

```bash
npm install @google/genai
```

## Environment variables

Backend `.env`:

```env
GEMINI_API_KEY=
GEMINI_MODEL=
```

Backend `.env.example`:

```env
GEMINI_API_KEY=
GEMINI_MODEL=
```

Do not expose these values through Vite or React.

## Security

- Keep the API key on the server.
- Keep `.env` out of Git.
- Rate-limit the itinerary endpoint.
- Restrict input lengths and trip duration.
- Validate generated JSON.
- Do not send passport numbers, scans, medical records, or vaccination records to Gemini.
- Do not automatically save generated suggestions.

## Proposed endpoint

```http
POST /api/ai/itinerary
```

Example request:

```json
{
  "destination": "Tokyo, Japan",
  "startDate": "2026-10-12",
  "endDate": "2026-10-14",
  "budgetLevel": "Mid-range",
  "interests": ["Culture", "Food"],
  "travelers": 2
}
```
