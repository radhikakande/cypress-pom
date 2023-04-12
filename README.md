# cypress-pom
cypress page object model framework 
1. install node and clone the repo

    ```
    npm install

    ```

2. Run the tests 

    ```
    npx cypress run 
     
    ```
3.  To run tests specific browser in headless 

    ```
    npx cypress run --browser chrome

    ```
4. To run tests specific browser in headed mode
    ```
    npx cypress run --browser chrome --headed

    ```
5. Tests reports will be created in the reports folder each file and additional configurations and tweaks can be done in cypress.config.js in reporterOptions 

     ```
    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    retries: 1,
    reporterOptions: {
        reportDir: 'cypress/reports',
        charts: true,
        reportPageTitle: 'custom-title',
        reportFilename: '[name].html',
        overWrite: true,
        html:true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
    });
    
     ```



    


