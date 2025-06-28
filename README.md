🟩 Wordle Clone (React)
A simple but complete Wordle clone built using React and only useState for state management — made just 20 days into learning React!

This project was my first real dive into component architecture, UI logic, and prop/state management in React. No external libraries, no context, no reducers — just pure useState, JSX, and a lot of hard-learned lessons. Built with Vite and deployed to GitHub Pages.

🧩 Components Breakdown
📦 Main Structure
Wordle (Root Component)

WordleGrid

Row

Tile

InputField

SuccessScreen / FailureScreen

⚙️ Data Flow
All core state (game board, round, win status) is maintained in the Wordle component.

State is passed down via props to child components for rendering (WordleGrid → Row → Tile) and logic (InputField).

InputField processes the input, triggers game logic, and updates the board and game state.

Win/loss state is handled via a screenIndex that dynamically switches UI screens.

Winning animations and dynamic class changes are all controlled through useState.

🧠 What I Learned

1. 🗝️ The Importance of Keys
   I underestimated React key props. I thought I was assigning unique keys — turns out I wasn't. Empty objects ({}) and missing key values caused React to render incorrectly, leading to weird UI bugs and re-renders. Now I never ignore keys.

2. 🔥 Prop Drilling Hell
   At first, I thought a single state would be enough. But as complexity grew, I ended up juggling 11+ states, drilling them down 3–4 component layers deep. It taught me the limits of useState and the importance of state architecture and planning. Time to learn useContext and useReducer.

3. 🧨 console.log() Lies
   Logging state mid-update confused me badly. I expected console.log() to reflect the latest value right after setting state, but it doesn’t — it logs the value at the time of render, not after updates. Caused me a day of confusion.

4. 🌀 Deep Copy vs Shallow Copy
   My game logic needed a deep clone of the answer array. I knew basic cloning, but not for nested objects. structuredClone() saved me. Without it, React kept mutating shared state and broke the game logic.

5. 🧾 The Value of Typing
   Updating the wrong part of a deeply nested structure caused subtle bugs. I realized how TypeScript could've prevented 90% of those errors. Will definitely explore TS next.

🚀 Stack
React (Functional Components)

Vite (Build Tool)

CSS (Animations, Transitions)

GitHub Pages (Deployment)

✅ Features
Wordle-like game with:

Green (correct), Yellow (present), Red (absent) tile status

Full 6x5 grid gameplay

Success/failure end screens

Animations on win and loss

Fully responsive UI

🌱 Future Improvements
Replace prop drilling with useContext

Refactor game logic into a custom useWordleLogic hook

Add sound effects

Add TypeScript for better structure

Track guess history and shareable scores

Made with pure frustration, passion, and console.log() abuse.
Day 20 of React — many more to come. 🚀
