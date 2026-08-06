# Travel Requirements API Research

## Question

Do we need another API for passport, visa, entry-document, and vaccination requirements?

## Finding

Yes, if the product promises current, personalized requirements. OpenAI should not be the authoritative source because rules change and depend on nationality, residence, transit, itinerary, and dates.

## IATA Timatic

Timatic provides passport, visa, health-document, and travel-restriction information used in international air travel.

Official links:

- Timatic overview: https://www.iata.org/en/services/compliance/timatic/
- Timatic AutoCheck: https://www.iata.org/en/services/compliance/timatic/autocheck/
- Timatic Widget: https://www.iata.org/en/services/compliance/timatic/widget/
- Timatic Web: https://www.iata.org/en/services/compliance/timatic/web/
- IATA Travel Centre: https://www.iata.org/en/services/compliance/timatic/travel-documentation/

Access generally requires contacting IATA, requesting a demonstration, or buying a product. Treat it as a paid or partnership integration until the team confirms credentials, pricing, and terms.

## Official public guidance for the MVP

- U.S. Department of State advisories: https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/
- State Department RSS information: https://travel.state.gov/content/travel/en/rss.html
- CDC destination guidance: https://wwwnc.cdc.gov/travel/destinations/list
- WHO travel advice: https://www.who.int/travel-advice
- IATA Travel Centre: https://www.iata.org/en/services/compliance/timatic/travel-documentation/

## Required versus recommended vaccines

- **Required:** a legal entry or exit rule in defined circumstances.
- **Recommended:** health guidance intended to reduce medical risk.

The UI must never label a recommendation as a legal requirement.

## MVP decision

Do not block the MVP on Timatic. Return official verification links and a clear disclaimer. Add Timatic only after access and a provider contract are confirmed.

## Data minimization

Do not collect or store passport numbers, document scans, vaccination records, medical history, or immigration documents for the MVP.
