## Example Cypress Project showing usage of different Cypress commands


#### Install Cypress:
**********************
Open terminal and do 
 --------npm init

Accept all defaults,then do following
 ------npm install Cypress (It will take some time to install)
-----npm i prettier (for code formatting)
Then add .prettierrc with list of default code in json format

#### Intelligent code completion:
****************************
Open Cypress dashboard using below command:
 npx Cypress Open

This will create Cypress folder and Cypress.json file in workspace

Create tsconfig.json and paste following configuration in it:
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]
}

#### Define shortcode to open cypress dashboard:
********************************************
Under package.json add following:
"scripts": {
    "cy:open": "cypress open"
  },
From Terminal fire below command: This should open Cypress dashboard
npm run cy:open

#### Command for running in headless mode:
******************
"cy:run": "cypress run"

#### Function of each folder in Cypress Project:
*******************************
Fixtures: Are used to store static data

#### Cypress Commands:
********************
https://docs.cypress.io/api/commands/wait#Syntax


https://docs.cypress.io/api/commands/get#Selector

#### Setup Hooks:
******************
In Cypress Mocha provides hooks like Before() and After()
before-- to setup system state
after --- to clean the state, cookies/local storage

#### Skip & Only
**************
it.skip will skip the test
it.only will run that test only

#### Install and use Xpath Plugin:
***************************
npm i cypress-xpath
then add following under support>>index.js file
require('cypress-xpath')

#### Run single test from command line:
***********************
npx cypress run --spec="cypress/integration/examples/ScrollPage.spec.js

#### Cypress.json:
*****************
This file contains all the configuration required for working in project
References:
https://docs.cypress.io/guides/references/configuration#cypress-json
options are:
Global, timeouts,file/folders,screenshot path,videos,downloads,viewport,browser

#### Example websites:
*********************
https://example.com/ </br>
https://books.toscrape.com/ </br>
https://demoqa.com/automation-practice-form</br>
https://itera-qa.azurewebsites.net/home/automation</br>
https://devexpress.github.io/testcafe/example/</br>

