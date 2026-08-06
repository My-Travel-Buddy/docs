# Safety, Cost, and Validation

## Cost control

- Use a Gemini model that supports the required feature set and fits the current free-tier or approved budget.
- Keep the model configurable through `GEMINI_MODEL`.
- Limit generated trip length.
- Limit interests and input sizes.
- Rate-limit the public endpoint.
- Do not retry indefinitely after provider failure.

## Request validation

Validate:

- destination
- start date
- end date
- end date is not before start date
- maximum trip duration
- budget level
- traveler count
- interests array

## Response validation

Before returning or saving Gemini output, verify:

- all required top-level keys exist
- every day has a valid date
- activities use allowed categories
- estimated cost is null or nonnegative
- arrays contain the expected object shapes
- the response contains a disclaimer

## Privacy

Do not send or store:

- passport numbers
- passport scans
- vaccination records
- health diagnoses
- payment-card information
- passwords or authentication tokens

## Failure handling

- Return `400` for invalid input.
- Return `429` for rate-limit violations.
- Return `502` for Gemini or Travel Buddy provider failure.
- Never expose raw provider errors, API keys, or stack traces to the client.
