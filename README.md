# String Calculator

Calculates the sum of positive numbers entered in a textarea. The numbers can be separated by a custom delimiter (specified by the user) or by a newline. If any negative numbers are provided, the calculator should throw an error and display the error message on the screen.

## Steps to create calculator in react

Create react app with following commond in cmd.

```js
npx create-react-app my-app
cd my-app
```

Bellow dependencies are used to run project, testing

```js
React, React-dom, React-testing Library, Jest
```

### Use Tailwindcss for UI

Install tailwindcss and its peer dependencies via npm, and create tailwind.config.js file.

```js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Add the paths to all of template files in tailwind.config.js file.

```js
content: ["./src/**/*.{html,js}"],
```

Add the @tailwind directives for each of Tailwind’s layers to main CSS file (i.e. index.css).

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### Developed by

[Nitesh Ghule](https://www.linkedin.com/in/nitesh-ghule/)
