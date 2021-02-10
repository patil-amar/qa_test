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

    ## How to fix uncaught exception error
    *  In cypress/support/index.js disable all uncaught exception (currently this is a work arround)

    ## what test does
    * Navigate to https://www.sainsburys.co.uk
    * Log into Sainsbury groceries
    * Seach and add product to trolley(Empty trolly before if contain items)
    * Book a slot
    * Go to checkout

    ## What I want to improve
    * I want to create a base class to hold elements for all the common components like menu and search
    * Page objects classes to hold element for each page and they extend to base class
    * Need to improve book a slot method

   ## How to run test
    * npm install
    * npx cypress run
