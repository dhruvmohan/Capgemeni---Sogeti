# Capgemeni---Sogeti
Automation Task Sogeti

   To run these tests on local machine.

   a. Clone the repo on local machine from Github.

   b. Checkout to master branch using the command 'git checkout master' and Open the 'Capgemeni---Sogeti' test folder in any IDE. I used 
      VS Code.

   c. First install and setup npm on local machine and initialize npm in this folder using terminal/ cmd prompt using 'npm init' command.

   d. Install the test specific npm libraries using the below commands

       npm install cypress --save-dev

       npm install node-xlsx --save

   e. Open Cypress Execution board by running command  - 'npx cypress open' in the terminal.

   f. Select 'E2E Testing' option. Select any browser type and after selecting the browser, the list of files appear on the left side.
     'API Tests.spec.cy.js' file has the  2 API test case scripts and 'UI Tests.spec.cy.js' file has the set of 3 UI test case scripts.
   
   g. Left click any of the 'API Tests.spec.cy.js' or 'UI Tests.spec.cy.js' files to run the tests in these files.
