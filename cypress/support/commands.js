Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');  // Certifique-se de que a URL está correta
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});