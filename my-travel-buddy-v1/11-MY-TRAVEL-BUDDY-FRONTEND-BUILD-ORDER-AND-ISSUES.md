# My Travel Buddy — Frontend Build Order and GitHub Issues

## Frontend Build Order

Build the frontend by feature, not by creating every file at once.

### Phase 1 — Frontend Foundation

Start with:

```text
main.jsx
App.jsx
index.css
App.css
```

Tasks:
- Confirm the Vite app runs
- Set up React Router
- Create the basic route structure
- Make sure each page can render

Routes:

```text
/               -> HomePage.jsx
/login          -> LoginPage.jsx
/signup         -> SignupPage.jsx
/trips          -> TripsPage.jsx
/trips/:tripId  -> TripPage.jsx
*               -> NotFoundPage.jsx
```

---

### Phase 2 — Home Page + Gemini Itinerary

Build the public trip form first.

Files:

```text
pages/HomePage.jsx
api/ai.js
```

Trip form fields:

```text
destination
start date
end date
budget
interests
```

Flow:

```text
HomePage form
-> POST trip information to backend
-> Gemini generates itinerary
-> frontend displays result
```

Goal:
- Guest can enter trip information
- Frontend sends the request to the AI endpoint
- Generated itinerary is displayed on the page

---

### Phase 3 — Authentication

Files:

```text
pages/LoginPage.jsx
pages/SignupPage.jsx
components/ProtectedRoute.jsx
components/Navbar.jsx
api/auth.js
```

Tasks:
- Build login page
- Build signup page
- Connect login/signup to backend auth routes
- Check if the user is logged in
- Add logout
- Protect saved trip pages

Protected routes:

```text
/trips
/trips/:tripId
```

---

### Phase 4 — Saved Trips

Files:

```text
pages/TripsPage.jsx
components/TripCard.jsx
api/trips.js
```

Flow:

```text
GET saved trips
-> display TripCard for each trip
-> click trip
-> open /trips/:tripId
```

Tasks:
- Fetch user's trips
- Display saved trips
- Add loading and error state
- Navigate to trip details

---

### Phase 5 — Trip Details + Activities

Files:

```text
pages/TripPage.jsx
components/ActivityCard.jsx
components/ActivityForm.jsx
api/activities.js
```

Trip page should show:

```text
Trip information
Activities
Checklist
```

Tasks:
- Fetch one trip
- Display trip details
- Display activities
- Add activity
- Edit activity
- Delete activity

---

### Phase 6 — Checklist

Files:

```text
components/ChecklistItem.jsx
components/ChecklistForm.jsx
api/checklist.js
```

Tasks:
- Display checklist items
- Add checklist item
- Mark item completed
- Edit checklist item if needed
- Delete checklist item

---

### Phase 7 — Final UI + Testing

Tasks:
- Finish Navbar
- Add loading states
- Add error messages
- Finish NotFoundPage
- Improve styling
- Test responsive layout
- Test frontend/backend flow
- Test protected routes
- Test AI itinerary flow

---

# Recommended GitHub Issues

Keep issues feature-based and simple.

## Issue 1 — Frontend foundation and routes

### Goal
Set up the basic React frontend and page routes.

### Tasks
- Set up React Router
- Add frontend routes
- Create basic page files
- Confirm each page renders

### Done when
- All main routes open the correct page
- Unknown routes show NotFoundPage

---

## Issue 2 — Create Home page trip form

### Goal
Create the public trip form for generating an itinerary.

### Tasks
- Add destination input
- Add start date
- Add end date
- Add budget
- Add interests
- Add generate itinerary button

### Done when
- User can enter trip information
- Form data can be submitted

---

## Issue 3 — Connect Home page to Gemini itinerary API

### Goal
Send the trip form information to the backend AI route.

### Tasks
- Create `api/ai.js`
- Send POST request to AI endpoint
- Handle loading
- Handle errors
- Receive generated itinerary

### Done when
- Frontend receives a successful itinerary response from the backend

---

## Issue 4 — Display generated itinerary

### Goal
Show the Gemini itinerary on the Home page.

### Tasks
- Display summary
- Display itinerary by day
- Display activities
- Display estimated cost if available

### Done when
- User can read the generated itinerary on the page

---

## Issue 5 — Create login page

### Goal
Allow existing users to log in.

### Tasks
- Build LoginPage
- Connect login form to backend
- Show login errors
- Redirect after successful login

### Done when
- User can log in successfully

---

## Issue 6 — Create signup page

### Goal
Allow new users to create an account.

### Tasks
- Build SignupPage
- Connect signup form to backend
- Show signup errors
- Redirect after successful signup

### Done when
- New user can create an account

---

## Issue 7 — Add frontend authentication and protected routes

### Goal
Protect pages that require login.

### Tasks
- Create ProtectedRoute
- Check current user/session
- Protect `/trips`
- Protect `/trips/:tripId`
- Add logout
- Update Navbar based on login state

### Done when
- Guest users cannot open protected pages
- Logged-in users can access them

---

## Issue 8 — Create saved trips page

### Goal
Display the logged-in user's saved trips.

### Tasks
- Create `api/trips.js`
- Fetch trips
- Create TripCard
- Display trip cards
- Link each card to trip details

### Done when
- User can see and open their saved trips

---

## Issue 9 — Create trip details page

### Goal
Display one saved trip with its information.

### Tasks
- Fetch trip by id
- Display destination and dates
- Display budget/interests if saved
- Prepare sections for activities and checklist

### Done when
- `/trips/:tripId` displays the correct trip

---

## Issue 10 — Display trip activities

### Goal
Show all activities for a trip.

### Tasks
- Create `api/activities.js`
- Fetch activities
- Create ActivityCard
- Display activity information

### Done when
- TripPage shows the trip's activities

---

## Issue 11 — Add activity form

### Goal
Allow users to create activities manually.

### Tasks
- Create ActivityForm
- Send POST request
- Refresh activity list after creation
- Handle errors

### Done when
- User can add an activity to a trip

---

## Issue 12 — Edit and delete activities

### Goal
Allow users to manage existing activities.

### Tasks
- Add edit action
- Send PATCH request
- Add delete action
- Send DELETE request
- Refresh activity list

### Done when
- User can update and remove activities

---

## Issue 13 — Display trip checklist

### Goal
Show checklist items for a trip.

### Tasks
- Create `api/checklist.js`
- Fetch checklist
- Create ChecklistItem
- Display checklist items

### Done when
- TripPage shows the trip checklist

---

## Issue 14 — Add checklist item

### Goal
Allow users to add checklist items.

### Tasks
- Create ChecklistForm
- Send POST request
- Refresh checklist after creation

### Done when
- User can add a checklist item

---

## Issue 15 — Update and delete checklist items

### Goal
Allow users to manage checklist items.

### Tasks
- Mark completed
- Send PATCH request
- Delete checklist item
- Refresh list

### Done when
- User can update and delete checklist items

---

## Issue 16 — Frontend error and loading states

### Goal
Make the frontend clear when data is loading or something fails.

### Tasks
- Add loading messages
- Add API error messages
- Disable buttons while submitting
- Handle empty states

### Done when
- Main frontend flows have clear loading and error feedback

---

## Issue 17 — Final frontend styling and responsive layout

### Goal
Finish the visual presentation of the app.

### Tasks
- Style Home page
- Style forms
- Style itinerary results
- Style trip cards
- Style Trip page
- Check mobile layout

### Done when
- Main pages are readable and usable on desktop and mobile

---

## Issue 18 — Frontend end-to-end testing

### Goal
Test the full user flow before deployment/demo.

### Test
- Home page loads
- AI itinerary generates
- Login works
- Signup works
- Protected routes work
- Saved trips load
- Trip details load
- Activity CRUD works
- Checklist CRUD works
- Errors are handled

### Done when
- Main MVP user flows work from frontend to backend

---

# Suggested Work Order

```text
1. Frontend foundation and routes
2. Home page trip form
3. Connect Gemini API
4. Display itinerary
5. Login
6. Signup
7. Protected routes
8. Saved trips
9. Trip details
10. Display activities
11. Add activity
12. Edit/delete activities
13. Display checklist
14. Add checklist item
15. Update/delete checklist
16. Loading/error states
17. Styling
18. End-to-end testing
```

## Team Rule

Do not create every file at the beginning just because it appears in the architecture.

Create the file when the feature needs it.

Example:

```text
Home page + Gemini
-> HomePage.jsx
-> api/ai.js

Saved trips
-> TripsPage.jsx
-> TripCard.jsx
-> api/trips.js
```

This keeps the frontend easier for the team to understand and avoids adding too much structure before it is needed.
