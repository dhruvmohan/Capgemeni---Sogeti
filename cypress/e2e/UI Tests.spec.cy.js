import rgbHex from 'rgb-hex';

describe('UI Tests', () => {

  
  it('Test Case 1', () => {

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
  
    // Navigate to the URL https://www.sogeti.com/
    cy.visit(`${Cypress.config().baseUrl}/?`);

    cy.contains('Allow all cookies').click()

    // Hover over Services Link (see Image below) and then Click Automation link.
    cy.get('div[class="wrapper"]').contains('Services').trigger('mouseover')
    cy.get('.subMenuLink').contains('Automation').click()

    // Verify that Automation Screen is displayed, and “Automation” text is visible in Page.
    cy.url().should('eq', 'https://www.sogeti.com/services/automation/')
    cy.get('.page-heading').contains('Automation')

    // Hover again over Services Link. Verify that the Services and Automation are selected (see
    //  Image below).
    cy.get('div[class="wrapper"]').contains('Services').should('have.css', 'color','rgb(255, 48, 76)')
    cy.get('.subMenuLink').contains('Automation').should('have.css', 'color','rgb(255, 48, 76)')

  })

  it('Test Case 2', () => {


  var First_Name = 'First_Name,'
  var Last_Name = 'Last_Name,'
  var Email = 'Email'
  var Phone 
  var Company = 'Company_Name'
  var Message = 'Message'
  
  var RandomNumber
  

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
  
   // Navigate to the URL https://www.sogeti.com/
    cy.visit(`${Cypress.config().baseUrl}/?`);

    cy.contains('Allow all cookies').click()

   //  Hover over Services Link and then Click Automation link.
    cy.get('div[class="wrapper"]').contains('Services').trigger('mouseover')
    cy.get('.subMenuLink').contains('Automation').click()

   //  On Automation Page, scroll down to the Contact us Form.
    cy.get('.Form__Title').scrollIntoView()


    RandomNumber = Math.floor(Math.random() * 1000000000)

    // Fill the First Name, Last Name, Email, Phone and Message fields with Random Generated

    cy.get('#4ff2ed4d-4861-4914-86eb-87dfa65876d8').type(First_Name +  RandomNumber , { force: true })
    cy.get('#11ce8b49-5298-491a-aebe-d0900d6f49a7').type(Last_Name +  RandomNumber, { force: true })
    cy.get('#056d8435-4d06-44f3-896a-d7b0bf4d37b2').type(Email +  RandomNumber + '@emaildoesnotexist.com', { force: true })
    cy.get('#755aa064-7be2-432b-b8a2-805b5f4f9384').type(RandomNumber, { force: true })
    cy.get('#703dedb1-a413-4e71-9785-586d609def60').type(Company +  RandomNumber, { force: true })
    cy.get('select[id="e74d82fb-949d-40e5-8fd2-4a876319c45a"]').select('Argentina', { force: true }).should('have.value', 'Argentina')
    cy.get('#88459d00-b812-459a-99e4-5dc6eff2aa19').type(Message +  ' ' + RandomNumber, { force: true })

    // Check the I agree checkbox.
    cy.get('label[for="__field_1239350"]').click({ force: true })

    cy.wait(5000);

    cy.get('iframe[title="reCAPTCHA"]').
        then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click({ force: true });
    })
    //----------------------------------Problem Faced------------------------------

    // I am unable to automate this test step for Captcha verifitication as after selecting the checkbox 
    // next to 'I'm not a Robot' I get a set of image verifications

   //----------------------------------Possible workarounds------------------------------
    // 1. Disable captcha
    // 2. Try creating a javascript program for captcha verification


    cy.wait(10000);

    // Then Click SUBMIT button.
    cy.contains('Submit').click({ force: true })


  })

  it('Test Case 3', () => {


    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
  

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()

    // Navigate to the URL https://www.sogeti.com/
    cy.visit(`${Cypress.config().baseUrl}/?`);

    cy.contains('Allow all cookies').click()

    // Click the Worldwide Dropdown link in Page Header.
    cy.get('.sprite-header.sprite-global-arrowdown').click({ force: true })

    // A Country dropdown list is displayed. These are the Country specific Sogeti links. 
    // Assert that all the Country specific Sogeti links are working.
    cy.get('#country-list-id')
    .within(() => {
        cy.get('a[rel="nofollow"]').each(page => {

          const link = page.prop('href')

            cy.request({
            url: link,
            failOnStatusCode: false  
      }).then(response => {
            Cypress.log({
            name: link,
            message: response.status
        })
      })
      })
    })

})
})