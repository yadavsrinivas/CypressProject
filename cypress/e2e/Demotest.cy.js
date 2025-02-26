describe('Launch Application', () => {
    it('Launch Site', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('input[name="username"]').type('john')
      cy.get('input[name="password"]').type('demo')
      cy.get('input[class="button"]').click()
      
    })
  })
