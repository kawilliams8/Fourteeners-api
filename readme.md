# Fourteeners API
[![Build Status](https://travis-ci.com/kawilliams8/Fourteeners-api.svg?branch=main)](https://travis-ci.com/kawilliams8/Fourteeners-api)
![Heroku Status](https://heroku-badge.herokuapp.com/?app=fourteeners-api)

## Live API
This api is deployed to `https://fourteeners-api.herokuapp.com/api/v1/peaks/`.
Server logging occurs via a Heroku/LOGDNA add on.

## Local Set Up

Clone down this repo and `cd` in.
Run `npm install`.
Run `node server.js`, or `npm start` to start the server with nodemon.
In your browser, test by pasting `http://localhost:3001/api/v1/peaks/1` into the search bar. You should see response data for Mount Elbert.

## Endpoints

### GET all peaks

URL: `http://localhost:3001/api/v1/peaks` or `https://fourteeners-api.herokuapp.com/api/v1/peaks`

Sample response (200):

```js
[
    id: 1,
    name: "Mount Elbert",
    elevation: 14433,
    rank: 1,
    range: "Sawatch",
    forest: "San Isabel",
    grizzlyBears: false,
    marmots: true,
    jerryLevel: "high",
    numberOfRoutes: 4,
    routes: {
      northeastRidge: {
        mileage: 9.5,
        gain: 4700,
        difficulty: "class 1",
        exposure: 1,
      },
      ...
    },
  ...
]
```

### GET a peak by its id

Note: The id is equivalent to a peak's rank, if it is ranked amongst the fourteeners. Unranked peaks have ids ascending from 100.

URL: `http://localhost:3001/api/v1/peaks/:id` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/:id`
Sample URL: `http://localhost:3001/api/v1/peaks/1` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/1`

Sample response (200):

```js
  {
    id: 1,
    name: "Mount Elbert",
    elevation: 14433,
    rank: 1,
    range: "Sawatch",
    forest: "San Isabel",
    grizzlyBears: false,
    marmots: true,
    jerryLevel: "high",
    numberOfRoutes: 4,
    routes: {
      northeastRidge: {
        mileage: 9.5,
        gain: 4700,
        difficulty: "class 1",
        exposure: 1,
      },
      ...
    },
  },
```

Sample response (404):

```js
{message: 'No peak found with an id of 75'}
```

### POST a new peak

URL: `http://localhost:3001/api/v1/peaks` or `https://fourteeners-api.herokuapp.com/api/v1/peaks`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 54,
    name: 'My New Fourteener',
    elevation: 14001,
    rank: 54,
    range: "Sawatch"
  })
}
```

Sample request, in POSTMAN:

Headers panel:
`Content-Type` should be `application/json`

Body panel:
```
{
    "id": 54,
    "name": "My New Fourteener",
    "elevation": 14001,
    "rank": 54,
    "range": "Sawatch",
    "forest": "San Isabel", //optional
    "grizzlyBears": true, //optional
    "marmots": true, //optional
    "jerryLevel": "extreme", //optional
    "numberOfRoutes": 1 //optional
}
```

Sample response (201): This returns the peak that was submitted in the POST request

```js
  { id: 54, name: 'My New Fourteener', ... }
```

Sample BAD request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 54,
    name: 'Mount Node',
  })
}
```

Sample BAD response (422):

```js
  { message: 'You are missing a required parameter: elevation' }
```

### DELETE a peak

URL: `http://localhost:3001/api/v1/peaks/:id` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/:id`

Sample URL: `http://localhost:3001/api/v1/peaks/2` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/2`

Sample response (204): No further details are sent for a successful deletion.

Sample BAD response (404):

```js
{message: 'No peak found with an id of 75'}
```

### PATCH details for one peak

URL: `http://localhost:3001/api/v1/peaks/:id` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/:id`

Sample URL: `http://localhost:3001/api/v1/peaks/2` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/2`

Note: Any combination of details can be updated in one request; only the id is required.

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    name: 'New Mount Elbert Name', //optional
    elevation: 14750, //optional
    rank: 54, //optional
    range: "Range Name", //optional
    forest: "Forest Name", //optional
    grizzlyBears: true, //optional
    marmots: true, //optional
    jerryLevel: "low", "medium", "high", "critical", or "extreme" //optional
    numberOfRoutes: 4 //optional
  })
}
```

Sample response (200): This returns the updated peak

```js
  { id: 1, name: 'New Mount Elbert Name', ... }
```

Sample BAD response (404):

```js
{message: 'No peak found with id 1 to update'}
```

### PATCH details for one route

URL: `http://localhost:3001/api/v1/peaks/:id` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/:id`

Sample URL: `http://localhost:3001/api/v1/peaks/2` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/2`

Note: The peak id, route name, and all four route details must be included.

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    routes: {
      southSlopes:
        { mileage: 8.1,
          gain: 4701,
          difficulty: "Class 1",
          exposure: 1
        }
      }
    })
}
```

Sample response (200): This returns the updated peak.

```js
  { id: 1,
    name: 'Mount Elbert',
    ...,
    routes: {
      "southSlopes": {
      "mileage": 8.1,
      "gain": 4701,
      "difficulty": "class 1",
      "exposure": 1
    },
    ...
    }
```

Sample BAD response (200): This always returns the peak, even if no updates were made.

### PATCH details to edit an existing peak and create an entirely new route

URL: `http://localhost:3001/api/v1/peaks/:id` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/:id`

Sample URL: `http://localhost:3001/api/v1/peaks/2` or `https://fourteeners-api.herokuapp.com/api/v1/peaks/2`

Note: The peak id, new route name, and all four route details must be included.

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    routes: {
      { newRoute:
        { mileage: 6,
          gain: 3000,
          difficulty: "Class 2",
          exposure: 1
          }
      }
    }
  })
}
```

Sample response (200): This returns the updated peak

```js
  { id: 1,
    name: 'Mount Elbert',
    ...,
    routes: {
      "newRoute": {
      "mileage": 6,
      "gain": 3000,
      "difficulty": "class 2",
      "exposure": 1
    },
    ...
    }
```

Sample BAD response (200): This always returns the peak, even if no updates were made.