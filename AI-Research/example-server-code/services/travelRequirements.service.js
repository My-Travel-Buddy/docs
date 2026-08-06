const OFFICIAL_SOURCES = Object.freeze([
  {
    name: "IATA Travel Centre",
    purpose: "Passport, visa, and health-document requirements",
    url: "https://www.iata.org/en/services/compliance/timatic/travel-documentation/"
  },
  {
    name: "U.S. Department of State",
    purpose: "Travel advisories and destination safety information",
    url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/"
  },
  {
    name: "CDC Travelers' Health",
    purpose: "Destination health guidance and vaccine recommendations",
    url: "https://wwwnc.cdc.gov/travel/destinations/list"
  },
  {
    name: "World Health Organization",
    purpose: "International travel and health guidance",
    url: "https://www.who.int/travel-advice"
  }
]);

function getTravelRequirementSources(destination = "") {
  const normalizedDestination = typeof destination === "string" ? destination.trim().slice(0, 100) : "";
  return {
    destination: normalizedDestination || null,
    sources: OFFICIAL_SOURCES,
    disclaimer: "General guidance only. Requirements can change and depend on nationality, residence, transit, itinerary, and personal circumstances. Verify with the destination government, airline, and an official travel-document source before departure."
  };
}

module.exports = { getTravelRequirementSources };
