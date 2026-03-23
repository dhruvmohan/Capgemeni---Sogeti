🚀 Enterprise QA project showcasing real-world testing practices, automation strategies, and delivery standards inspired by Capgemini & Sogeti.

This repository represents a real-world QA/testing project inspired by enterprise practices followed at Capgemini and Sogeti, focusing on delivering high-quality software through structured testing methodologies and automation.

The project highlights practical implementation of:

Test planning and execution
Automation frameworks
Quality assurance processes aligned with enterprise delivery models

It reflects how large organizations approach QA by combining:

Functional testing
Automation strategies
Process-driven quality governance

The repository can include (based on enterprise-style setups):

Test cases and scenarios
Automation scripts (UI/API)
Test execution workflows
Reporting and defect tracking practices

Such projects typically align with industry-standard QA frameworks, ensuring:

Consistency in testing
Traceability across requirements and defects
Scalable automation strategies

This repository serves as a practical showcase of enterprise QA delivery, useful for understanding how testing is performed in large-scale consulting environments

----------------------------------------------------------------------------------------------------------------------------------------------------------------

🔹 Key Features
🏢 Enterprise QA Approach
Reflects structured testing methodologies used in consulting firms
🧪 Test Case Design & Execution
Covers functional and regression testing scenarios
🔁 Automation Integration
Includes automation scripts or frameworks (UI/API)
📊 Test Reporting & Documentation
Structured reporting of test execution results
🔗 Defect Tracking Alignment
Can be integrated with tools like Jira
⚙️ Process-Driven Testing
Follows QA lifecycle practices (STLC, Agile testing)
🧩 Scalable & Reusable Design
Suitable for enterprise-level applications
🔄 CI/CD Ready (Extendable)
Can be integrated into pipelines for continuous testing

----------------------------------------------------------------------------------------------------------------------------------------------------------------

🔹 Tech Stack (Typical / Expected)
🧪 Testing
Manual Testing + Automation
🎭 UI / API Automation (if included)
Selenium / Cypress / RestAssured
💻 Programming
Java / JavaScript / Python
🔗 Tools
Jira (defect tracking)
Test management tools
⚙️ DevOps (Extendable)
Jenkins / GitHub Actions


   To run these tests on local machine.

   a. Clone the repo on local machine from Github.

   b. Open the 'Capgemeni---Sogeti' test folder in any IDE. I used VS Code and Checkout to master branch using the command 'git checkout 
      master' command 

   c. First install and setup npm on local machine and initialize npm in this folder using terminal/ cmd prompt using 'npm init' command.

   d. Install the test specific npm libraries using the below commands

       npm install cypress --save-dev

       npm install node-xlsx --save

   e. Open Cypress Execution board by running command  - 'npx cypress open' in the terminal.

   f. Select 'E2E Testing' option. Select any browser type and after selecting the browser, the list of files appear on the left side.
     'API Tests.spec.cy.js' file has the  2 API test case scripts and 'UI Tests.spec.cy.js' file has the set of 3 UI test case scripts.
   
   g. Left click any of the 'API Tests.spec.cy.js' or 'UI Tests.spec.cy.js' files to run the tests in these files.
