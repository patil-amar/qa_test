# Sainsbury's QA Technical Test
## Project Structure
    .
    ├── node_modules
    ├── cypress
    ├    ├── fixtures
    ├    ├    ├── example.json
    ├    ├── integration
    ├    ├    ├── sainsburys.spec.js
    ├    ├── plugins
    ├    ├    ├── index.js
    ├    └── support
    ├         ├── commands.js
    ├         └── index.js
    ├
    ├── .gitignore
    ├── package.json
    └── README.md
## Dependencies 
    - jest
    - cypress
    - @testing-library/cypress
# Tasks
We would like you to complete the sainsburys.spec.js to cover the following:

1. A few basic scenarios covering the journey from the sainsburys.co.uk homepage to checkout
   *  You'll need to login (details will be provided)
   *  Search for some products
   *  Add them to your basket and go to checkout for delivery