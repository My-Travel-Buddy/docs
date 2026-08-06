# Travel Requirements Research

## Primary MVP candidate: Travel Buddy API

Official access:

- https://travel-buddy.ai/api/

Potential uses:

- visa-free status
- visa on arrival
- eVisa or eTA information
- passport-to-destination comparisons
- visa categories
- registration requirements

## Limitation

Travel Buddy API should be treated as a planning source, not as legal clearance or a guarantee of entry.

Every result should include a disclaimer and official verification links.

## Enterprise reference: IATA Timatic

- https://www.iata.org/en/services/compliance/timatic/
- https://www.iata.org/en/services/compliance/timatic/travel-documentation/

Timatic is a future enterprise option. Do not block the capstone on commercial access.

## Health sources

### CDC Travelers' Health

- https://wwwnc.cdc.gov/travel/destinations/list

### World Health Organization

- https://www.who.int/travel-advice

The UI must distinguish between:

- required health documentation
- recommended vaccination guidance

## Safety advisories

### U.S. Department of State

- https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/

## Data minimization

Do not collect or store:

- passport numbers
- passport scans
- vaccination records
- medical history
- immigration documents

Use only minimum planning inputs such as passport country, destination, and travel dates.

## Proposed endpoint

```http
GET /api/travel-requirements?passportCountry=DO&destination=JP
```
