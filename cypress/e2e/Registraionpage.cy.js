describe('Launch Application', () => {
    it('Launch Site', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('Srinivas')
      cy.get("input[id='customer.lastName']").type('yadav')
      cy.get("input[id='customer.address.street']").type('collins')
      cy.get("input[id='customer.address.city']").type('Melbourn')
      cy.get("input[id='customer.address.state']").type('VIC')
      cy.get("input[id='customer.address.zipCode']").type('20000')
      cy.get("input[id='customer.phoneNumber']").type('111111')
      cy.get("input[id='customer.ssn']").type('323233')
      cy.get("input[id='customer.username']").type('Srinivasa')
      cy.get("input[id='customer.password']").type('yadava')
      cy.get("input[id='repeatedPassword']").type('yadava')
      cy.get('[colspan="2"] > .button').click()
      cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')


    
    })
  })
