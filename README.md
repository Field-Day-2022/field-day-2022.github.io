# Field Day: Landing Page and Documentation

Welcome to the Field Day Project! This repository serves as the main landing page for Field Day, a comprehensive suite of tools designed to support wildlife researchers in collecting and managing data efficiently. The project is currently under development by a team of students at Arizona State University.

## Live Preview Setup

This repository now supports live previewing using Docusaurus. Follow these steps to set it up:

### Prerequisites

1. Ensure Node.js and npm are installed:
	```bash
	node --version
	npm --version
	```

### Running the Live Preview

1. Install the project dependencies:
	```bash
	npm install
	```

2. Run the live preview:
	```bash
	npm start
	```

	This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

To generate static content into the `build` directory:
```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:
```bash
USE_SSH=true npm run deploy
```

Not using SSH:
```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

> **Note:** The server automatically reloads when changes are made to `.md` files or the configuration.

## Planned Documentation

This repository will soon include:

* **User Guides**: Step-by-step instructions to help researchers and users make the most of the Field Day tools.
* **Contribution Guides**: Information for developers interested in contributing to the project.
* **Developer Guides**: Technical documentation and guidelines for extending and maintaining the project.
