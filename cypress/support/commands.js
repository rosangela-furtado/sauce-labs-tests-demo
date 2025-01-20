Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');  // Certifique-se de que a URL está correta
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// Adicionar produto ao carrinho
Cypress.Commands.add('addProductToCart', () => {
  // Selecione um produto e clique no botão "Add to cart"
  cy.get('.inventory_item').first().find('button').click();
});