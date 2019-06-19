# The Game

Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.

Each round, the player rolls five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are displayed in a different color). They may re-roll the unfrozen dice up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category scores differently.

After 13 rounds, the game is over, and the player’s score is the total of each scoring category.

#Scoring Categories

**Category | Description |Example Score**

**Ones** |Score 1 for every 1 | 1 1 2 3 4 = 2

**Twos** |Score 2 for every 2 | 1 2 2 3 4 = 4

**Threes** |Score 3 for every 3 | 1 2 3 3 3 = 9

**Fours** |Score 4 for every 4 | 1 2 4 4 5 = 8

**Fives** |Score 5 for every 5 | 1 2 5 5 5 = 15

**Sixes** |Score 6 for every 6 | 1 2 3 6 6 = 12

_3 of Kind:_
If 3+ of one value, score sum of all dice (otherwise, score 0) 1 2 3 3 3 = 12
_4 of Kind:_
If 4+ of one value, score sum of all dice (else 0) 1 2 2 2 2 = 8
_Full House:_ If 3 of one value and 2 of another, score 25 (else 0) 2 2 3 3 3 = 25
_Small Straight:_ If 4+ values in a row, score 30 (else 0) 1 2 3 4 6 = 30
_Large Straight:_ If 5 values in a row, score 40 (else 0) 1 2 3 4 5 = 40
_Yahtzee:_ If all values match, score 50 (else 0) 2 2 2 2 2 = 50
Chance Score sum of all dice 1 2 3 4 6 = 16

## Example Round

The initial roll is: 2 4 3 2 5.

The player decides to try to get as many twos as possible, and clicks to freeze both twos, then re-rolls, getting a new 2 3 5. They now have: 2 2 3 2 5.

The player decides to try for a full house, and freezes all of their twos and their three (hoping to roll another 3 to get a full house). They re-roll the die showing five, getting a 6 and now have 2 2 3 2 6.

Sadly, they didn’t get their full house. They could score this as:

Twos: for 6 points
Threes for 3 points
Sixes: for 6 points
Three of Kind: (twos) for 15 points
Chance: for 15 points
Any other category they claimed on this round would score 0.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
