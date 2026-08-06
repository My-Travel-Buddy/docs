# My Travel Buddy — Updated Build Plan

This plan reflects the team’s current progress. Use it as a roadmap rather than a strict sequence, since some backend work has already started.

## Phase 1: Project Foundation

- Confirm the MVP scope
- Confirm the frontend and backend structure
- Set up the GitHub workflow
- Set up environment variables
- Review the shared documentation and naming conventions

## Phase 2: Backend Foundation

- Set up Express
- Connect Sequelize
- Connect PostgreSQL
- Configure CORS
- Add the health route
- Add middleware
- Organize route and model exports

## Phase 3: Authentication

- Create the User model
- Add signup
- Add login
- Add session checking
- Add logout
- Protect private routes

## Phase 4: Core Database Resources

### Trip CRUD

- Create the Trip model
- Create a trip
- Read all trips
- Read one trip
- Update a trip
- Delete a trip
- Add ownership protection

### Activity CRUD

- Create the Activity model
- Create an activity
- Read activities
- Update an activity
- Delete an activity
- Support manual and AI-generated activities

### Checklist CRUD

- Create the ChecklistItem model
- Create a checklist item
- Read checklist items
- Update a checklist item
- Mark an item complete or incomplete
- Delete a checklist item

### Relationships

- Add User–Trip relationships
- Add Trip–Activity relationships
- Add Trip–ChecklistItem relationships
- Confirm ownership protection

## Phase 5: Frontend Foundation

- Create pages and routes
- Add navigation
- Build forms
- Create API request files
- Add loading states
- Add error states
- Add protected routes

## Phase 6: Connect Frontend to Backend

- Connect Trip CRUD
- Connect Activity CRUD
- Connect Checklist CRUD
- Connect the authentication flow
- Confirm saved data remains after refresh

## Phase 7: Guest Draft Transfer

- Save the guest draft in `sessionStorage`
- Redirect the guest to login or signup
- Restore the draft after login
- Save the trip and approved resources
- Clear the draft after saving

## Phase 8: AI and Travel Data Integration

### Gemini

- Add the Gemini service
- Create the structured prompt
- Return structured JSON
- Validate the AI response
- Handle provider errors
- Add retry behavior
- Rate-limit the AI endpoint

### Travel Buddy API

- Add visa and entry-planning data
- Normalize the API response
- Add official verification links
- Show a clear disclaimer

### Official Verification Sources

- IATA
- CDC
- WHO
- U.S. Department of State
- Destination government or embassy websites

## Phase 9: Deployment and Polish

- Connect Neon
- Deploy the backend to Render
- Deploy the frontend to Vercel
- Add seed data
- Improve loading states
- Improve error states
- Complete the responsive design pass
- Update the README
- Test the full user flow
- Rehearse the demo

## Definition of Done

```text
Guest generates an itinerary
→ logs in
→ saves the trip
→ saves an AI-generated activity
→ adds a manual activity
→ creates a checklist item
→ updates the checklist item
→ refreshes the page
→ all saved data remains
```
