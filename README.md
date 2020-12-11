# Running Locally

This is a Node.js applications. Please go to the [downloads page](https://nodejs.org/en/download/) to install Node. This will ship with a package manager, [NPM](https://www.npmjs.com/get-npm).

1. In the root of the aplication run `npm install` to install application dependencies.
2. Copy the contents of the `.env.sample` into a new file named `.env`.
3. Run the application with command `npm run dev`. This will begin the application at [http://localhost:3000](http://localhost:3000).

## Running in Production Mode

To run the application in production mode, first run `npm run build` then `npm start`.  The application will run on port `8080`.
