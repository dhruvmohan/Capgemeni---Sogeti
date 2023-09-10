

Automation Task Sogeti

To run these tests on local machine.

a. Clone the repo on local machine from Github.

b. Open the 'Capgemeni---Sogeti' test folder in any IDE. I used VS Code and Checkout to master branch using the command 'git checkout master' command 

c. First install and setup npm on local machine and initialize npm in this folder using terminal/ cmd prompt using 'npm init' command.

d. Install the test specific npm libraries using the below commands

   npm install cypress --save-dev

   npm install node-xlsx --save
e. Open Cypress Execution board by running command - 'npx cypress open' in the terminal.

f. Select 'E2E Testing' option. Select any browser type and after selecting the browser, the list of files appear on the left side. 'API Tests.spec.cy.js' file has the 2 API test case scripts and 'UI Tests.spec.cy.js' file has the set of 3 UI test case scripts.

g. Left click any of the 'API Tests.spec.cy.js' or 'UI Tests.spec.cy.js' files to run the tests in these files.


-	Configure Cypress using the below link
https://docs.cypress.io/guides/getting-started/installing-cypress
-	Create test files in cypress/e2e folder
-	Run all spec files located in cypress/e2e from command line using the following command
npx cypress run --spec "cypress/e2e/*" --browser=chrome
-	For Cucumber install the following plugins
npm i @badeball/cypress-cucumber-preprocessor
npm i @bahmutov/cypress-esbuild-preprocessor
and  configure the following 2 files 
cypress.config.js
configure .cypress-cucumber-preprocessorrc.json
-	create feature file(given, when and then) and stepDefinitions folder and test files under that
-	Download plugin(BDD - Feature-Editor) to show BDD commands in different colours in VS Code editor
-	To setup mochawesome Reports

install these 2 packages 

npm install --save-dev mochawesome

npm install mochawesome-merge --save-dev

Run cypress tests and generate Mochaawesome results

npx cypress run --spec "cypress/e2e/*"

Run merge command to merge the tests

npm run mochawersome:merge



//input[contains(@id, ':inputBetriebsstelle__text')]
//a[text()='Anlagenportal Netz']
//a[contains(@id, 'leveloneiterator:__row0:htmlOutputLink') and text()='Suche Serviceeinrichtungen']
//div[@class='caf-title'][contains(text(),'mehr als 950')]
//span[text()='Alle selektierten Typen vorhanden']/preceding-sibling::input

 //(span[@class='mat-mdc-button-touch-target'])[1] sometimes we need to go inside the element and check
 // document.getElementById(): This method returns the element with the specified ID. For example, document.getElementById('myElement') would return the element with the ID 'myElement'.
// document.getElementsByClassName(): This method returns a collection of elements with the specified class name. For example, document.getElementsByClassName('myClass') would return all elements with the class name 'myClass'.
// document.getElementsByTagName(): This method returns a collection of elements with the specified tag name. For example, document.getElementsByTagName('p') would return all <p> elements.
// document.querySelector(): This method returns the first element that matches the specified CSS selector. For example, document.querySelector('#myElement') would return the element with the ID 'myElement'.
// document.querySelectorAll(): This method returns a collection of elements that match the specified CSS selector. For example, document.querySelectorAll('.myClass') would return all elements with the class name 'myClass'.