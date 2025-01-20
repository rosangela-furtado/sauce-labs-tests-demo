describe('Remove Product from Cart', () => {
  beforeEach(() => {
    // Login com credenciais válidas
    cy.login('standard_user', 'secret_sauce');
  });

  it('Deve adicionar um produto ao carrinho, remove-lo e verificar que o carrinho esta vazio', () => {
    // Adiciona um produto ao carrinho
    cy.addProductToCart();

    // Verifica que o carrinho tem 1 item
    cy.get('.shopping_cart_link').should('contain', '1');

    // Acessa o carrinho
    cy.get('.shopping_cart_link').click();

    // Remove o produto do carrinho
    cy.removeProductFromCart();

    // Verifica que o carrinho está vazio
    cy.get('.cart_item').should('not.exist'); // Verifica que não há itens no carrinho
    cy.get('.shopping_cart_link').should('have.text', ''); // Verifica que o carrinho está vazio
  });
});