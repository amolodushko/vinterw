# Frontend Coding Task ("PRD")

Via is expending to Bike rentals and needs a dashboard to locate available bikes all over the world.
For that, we have started collaborating with a free service named [City Bik](https://citybik.es/).
Your help is needed to fix issues and develop new features for this new feature.

## Figma

You can find the exported design in the project:
`src/assets/demo/demo.png`

## Requirements

The following sections break down what you'll need to do:

### Bug fix

Before we begin there's a blocker:

🚨 [Production incident report]

-   Reported by NOC:
    `The project is not working, all we see is a black screen!`

Please fix the bug in order to proceed with the task

### Discussion

-   How can we make sure such bug won't reoccur in production?

## Code improvement

1. The component was written by a junior developer, review and fix his code.
   tip: focus on the filter script which is unreadable and has the worst performance.

2. The list is too long which raised two complaints from the users:

    1. browsers to get stuck in slow computers.
    2. users can't see the footer.

how can we fix it?

## Stations task

Once user finds the desired location, he'd like to know what is the current rental status there.
Your task is to show a modal with details of the stations when the 'View Stations' button is clicked

### 1. API Call

You'll need to make an additional API call to get information about the stations. Here's the [API documentation](http://api.citybik.es/).

### 2. Display Data

The modal should display information about the stations. Each station object in the API response contains several properties. You should display at least the following:

-   `name`
-   `timestamp`
-   `empty_slots`
-   `free_bikes`

### 3. Refactoring

There's a new requirement to show in the header the city name and number of free_bikes.
How would you refactor the code to support it?

### 4. Error Handling

Include error handling for the API request. If the request fails for any reason, display an appropriate error message in the modal.

### 5. Styling

Style the modal to fit cohesively with the rest of the dashboard.
