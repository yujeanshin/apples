# Design Document
## File Structure
The root folder of the project has a `/public` folder, a `/src` folder, and some documentation.
`/public` most notably contains the basic index.html file that all the subsequent React pages are based on.
Within `/src`, we have several folders.
- The `/images` folder contains images used on the website.
- The `/pages` folder contains the main webpages for the game.
- The `/components` folder holds components used in the pages. I used functional components because they are simpler to read and write.
- The `/styles` folder contains the CSS files for the pages and components.

## Files
### `App.js`
`App.js` links the `Home.js`, `Game.js`, and `Settings.js` pages using `<Routes>` from `react-router-dom`. It also includes several states: `color`, `timerOn`, and `soundOn`. These states must be in the parent `App.js` file in order to access them from both the Game and Settings pages.

### `Home.js`
`Home.js` is the title screen that the user first sees when opening the application. It includes a link to both `Game.js` and `Settings.js`.

### `Settings.js`
`Settings.js` includes three settings for the game: changing the color of the objects, turning the timer on and off, and toggling the sound effect. After seeing how a user changes the settings, we use props to change the state of `color`, `timerOn`, or `soundOn` so that the changes can be implemented in the game.
A useEffect is implemented to play the sound effect when the user turns on the sound effect. useEffect is effective here because it runs every time the `soundOn` state is updated.

### `Game.js`
`Game.js` has a header with the title, the Grid component, and a link at the bottom to `Home.js`. It takes props from `App.js` and passes them into the Grid component.

### `Grid.js`
`Grid.js` is the heart of the game.
The output of this component depends on several factors.
1. If the game is over, then we display a Game Over screen with a button to Restart or return to `Home.js`.
    - We use an `isGameOver` state to track if the game is over (`true`) or still being played (`false`). When the timer runs out or all blocks are removed, we set `isGameOver` to `true`. When we (re)start the game, we set `isGameOver` to `false`.
2. If the timer setting is off, then we do not show a timer when the game is being played.
    - We can tell if the timer setting is on or off by the `timerOn` prop.
3. If the game is being played, we display a grid of numbers. These numbers can be connected by clicking and dragging the mouse, and the numbers disappear if the selected numbers add up to 10.
    - 
    - The particular image in the grid is determined by the `color` prop that is passed into the Block component.

At the top of `Grid.js`, we have constants that store
- the number of rows in the grid (8 by default),
- the number of columns in the grid (8 by default),
- the target number that the user aims to make (10 by default), and
- the total seconds on the timer (60 by default)

We keep track of the grid, score, seconds remaining, and whether the game is over or not with states.

The `resetGame` function resets the game and is called when the Reset button is clicked. We set the score to 0, set `isGameOver` to `false`, reset the grid, and reset the number of seconds remaining.
    - The resetGrid function creates a new grid and is called when the Reset button is clicked.

During the game, we check if the user has made a valid selection on mouseUp in the `finishSelection` function.
- First, we find the sum of all selected numbers
- Then, if the sum is equal to the target (default: 10), then a sound effect is played, and the blocks disappear by changing the class of the selected blocks and using CSS styling.
- `score` increases by the number of blocks removed.

### `Timer.js`
`Timer.js` is a component of `Grid.js`. We make the Timer a component to create a helpful layer of abstraction and simplify `Grid.js`.
The component updates every second (or every 1000 milliseconds) and returns the time remaining.

### `Block.js`
`Block.js` is a component of `Grid.js`. We make the Block a component to create a helpful layer of abstraction and simplify `Grid.js`.
`Block.js` takes props to determine the image to display and changes the color of the number inside the block accordingly, using ternary operators.



A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did. Your design document should be at least several paragraphs in length. Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.
