# Getting Started with Flexbench standalone desktop app

This project is built with electron and react

# Prerequisites

- To use Electron, you need to install Node.js. We recommend that you use the latest LTS version available.
  Please install Node.js using pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.

### To check that Node.js was installed correctly, type the following commands in your terminal client:
  node -v
  npm -v

### To run the application on your local follow the steps:

1. Install dependency `npm run install-dep`
2. Start the development server for linux-mac `npm run dev` and for windows `npm run w-dev`

Runs the app in the development mode.\

"dev": "concurrently \"npm start\" \"wait-on http://localhost:3000 && electron .\"",

This script runs two processes at the same time.
Concurrently will handle both the process:
  - React (renderer process)
  - Electron (main process)

wait-on simply waits for the react(renderer process) to start ans then starts the electron process.\

The page will reload when you make changes in src directory.\

But any change in the public/electron.js file will not reflecct.\
For this re run the above script (`npm run dev`).


### To build the executable files (unpacked) and installer

Open terminal in desktop-app directory and run the command-

`npm run electron:build`

if above command throws error try-

`npm electron:build`

The executables and installer can be found in the `/dist` 

