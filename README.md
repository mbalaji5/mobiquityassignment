### `Requirement in details`

- Show list of F1 world champions starting from 1950 until now.
- Clicking on champion should dispaly the list of winner for every race.
- Highlight when the winner has been the world champion for same season.
  - user Driver id to find the winner is world champion for same season
- Use Ergast api(https://ergast.com/api) to get world champions details and race winner details

### `Ergast Developer API`

- List of world champions https://ergast.com/api/f1/driverstandings/1?limit=100&offset=1
- List of winners for every race for the selected season https://ergast.com/api/f1/2005/results/1?limit=100

### `Tech`

- Used React with JXS to develop the single page application.
- JS and CSS for component and design.
- Used Axios for connecting to api.
- Jest for Unit testing.
- Used function components to render the UI
- used React hooks to handle life cycle event.(`useState and useEffect`).
- Validated lint basic rules (`To run linting -> npm run lint`).
- To improve the user experinace showed the race winner details in same page so that user can naviage easly between the season.Hence `Routing is not Needed/implemented`.
- `Redux is not required` for this application - As we are not moving beween the multiple page and multiple components. also the data can be handled in componet state it self.
- Used 'prop-types' to validate/avoid run time errors for component params.(Default and expected data types.)

### `To start -> npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `To run test -> npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
