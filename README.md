JWin's Boiler Plate
===================

This is basically just a playground for boilerplate experimentations. Not recommended for public consumption.

Requirements
____________

Node and NPM

Getting Set Up
______________

From the project root folder run "npm install" to install require node packages

Running the Server
__________________

From the project root run "node server.js". The server is just a pass through right now. There is no error handling or any other smarts at all. The port is set to 5000 by default.

Running a Build
_______________

From the project root run "node r.js -o build.js". Assets are built to scripts.build/ and there's no automagic pathing at the moment so the path to the scripts file would have to be changed in the html.