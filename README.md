# Progressive Text Editor

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description
The Progressive Text Editor is an exercise in utilizing Progressive Web Application methodology to build a front and back end application that is similar to a typical text editor such as NotePad++ or VS Code.
Here, the user can add notes or code snippets with or without internet connection in order to save for future use by way of service workers and cache APIs.

Link to Deployed Application: https://text-editor-lutz143.herokuapp.com/

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
* The Progressive Text Editor requires Node.js and an npm install for node_modules.
* For routing, the app utilizes Express.js
* Service handling, offline use, and database performance is handled by webpack-dev-server, WebpackPwaManifest, Babel, and IndexedDB
* Additionally, a css-loader and concurrently commands were added in the development and rendering of the app

## Usage
`AS A developer I WANT to create notes or code snippets with or without an internet connection SO THAT I can reliably retrieve them for later use`

* GIVEN a text editor web application
* WHEN I open my application in my editor
* THEN I should see a client server folder structure
* WHEN I run `npm run start` from the root directory
* THEN I find that my application should start up the backend and serve the client
* WHEN I run the text editor application from my terminal
* THEN I find that my JavaScript files have been bundled using webpack
* WHEN I run my webpack plugins
* THEN I find that I have a generated HTML file, service worker, and a manifest file
* WHEN I use next-gen JavaScript in my application
* THEN I find that the text editor still functions in the browser without errors
* WHEN I open the text editor
* THEN I find that IndexedDB has immediately created a database storage
* WHEN I enter content and subsequently click off of the DOM window
* THEN I find that the content in the text editor has been saved with IndexedDB
* WHEN I reopen the text editor after closing it
* THEN I find that the content in the text editor has been retrieved from our IndexedDB
* WHEN I click on the Install button
* THEN I download my web application as an icon on my desktop
* WHEN I load my web application
* THEN I should have a registered service worker using workbox
* WHEN I register a service worker
* THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
* WHEN I deploy to Heroku
* THEN I should have proper build scripts for a webpack application

---
### Successful Console Log

![image](/Assets/consoleLog_lutz143.png)
---
### Successful PUT/GET via localStorage

![image](/Assets/localStorage_lutz143.png)
---
### Successful Service Workers

![image](/Assets/serviceWorkers_lutz143.png)
---
### Successful Install for Offline Use

![image](/Assets/installedOfflineApp_lutz143.png)
![image](/Assets/installedOfflineIcon_lutz143.png)
---

## Tests
Use of Insomnia was utilized to confirm proper CRUD handling within the IndexedDB

## Questions
* For questions, you may contact me on GitHub: [lutz143](https://github.com/lutz143)

---

## License
ISC