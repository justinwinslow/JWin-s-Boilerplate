#!/bin/bash          
echo -e "\nInstall JWin's Boilerplate\n"

function installNode {
	echo -e "Node.js not found so I'll install it for you.\n"

	sudo apt-get -y install python-software-properties
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get -y install nodejs npm
}

command -v "node" >/dev/null 2>&1 || { installNode; }

NODE_VERSION=`node -v`

echo -e "Installed node version: $NODE_VERSION\n"

echo -e "Installing node packages...\n"
sudo npm install

echo -e "Installing front end packages...\n"
sudo jam install

echo -e "\nInstallation complete. Run \"node server.js\" to get the server running."
echo -e "Then point your browser to http://localhost:5000 to view the application.\n"