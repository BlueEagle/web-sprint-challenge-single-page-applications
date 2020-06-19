describe('Test basic I/O', () => {
  it('loads properly', () => {
    cy.visit('http://localhost:3000/')
    .url().should('include', 'http://localhost:3000/')
  })

  it('enters the Pizza form', () => {
    cy.get('[name=pizzaButton]')
      .click()
  })

  it('enters name', () => {
    cy.get('input[name=name]')
      .type('John')
      .should('have.value', 'John')
  })


})