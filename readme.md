# Fourteeners API

## Set Up

Clone down this repo and `cd` in.
Run `npm install`.
Run `node server.js`, or `npm start` to start the server with nodemon.
In your browser, test by pasting `http://localhost:3001/api/v1/peaks/1` into the search bar. You should see response data for Mount Elbert.

## Endpoints

### GET all peaks

URL: `http://localhost:3001/api/v1/peaks`

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

URL: `http://localhost:3001/api/v1/peaks/:id`
Sample URL: `http://localhost:3001/api/v1/peaks/1`

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

URL: `http://localhost:3001/api/v1/peaks`

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

URL: `http://localhost:3001/api/v1/peaks/:id`

Sample URL: `http://localhost:3001/api/v1/peaks/2`

Sample response (204): 

```
no content in the body, nothing to parse
```

Sample BAD response (404):

```js
{message: 'No peak found with an id of 75'}
```
