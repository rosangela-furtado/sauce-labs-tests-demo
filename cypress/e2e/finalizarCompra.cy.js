describe('Testando fluxo completo de checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    // Realiza login (se necessário)
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Deve realizar o checkout e confirmar o pedido', () => {
    // Verifica se estamos na página de inventário
    cy.url().should('include', '/inventory.html');

    // Adiciona um produto ao carrinho
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').should('contain', '1');

    // Vai para a página de checkout
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Verifica se os itens no carrinho estão visíveis
    cy.get('.cart_list').should('be.visible');

    // Inicia o checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    // Preenche as informações de checkout
    cy.get('[data-test="firstName"]').type('Rosangela');
    cy.get('[data-test="lastName"]').type('Furtado');
    cy.get('[data-test="postalCode"]').type('16102000');

    // Clica no botão para confirmar o formulário e vai para a página de resumo do checkout
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    
    // Finaliza a compra clicando no botão Finish
    cy.get('[data-test="finish"]').click();
    
    // Verifica se a página de confirmação foi carregada corretamente
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
    
    // Verifica se o carrinho foi limpo após a compra
    cy.get('.shopping_cart_link').should('not.contain', '1');
  });
});