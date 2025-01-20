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

// Remover produto do carrinho
Cypress.Commands.add('removeProductFromCart', () => {
  // Clique no botão "Remove" no carrinho
  cy.get('.cart_item').find('button').click();
});

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, zipCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zipCode);
  cy.get('[data-test="continue"]').click(); // Clique no botão para continuar
});