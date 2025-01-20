describe('Login Test', () => {
  it('Should login successfully', () => {
    // Usando o comando de login
    cy.login('standard_user', 'secret_sauce')
    
    // Verifica que o login foi bem-sucedido
    cy.url().should('include', '/inventory.html')
  })
})