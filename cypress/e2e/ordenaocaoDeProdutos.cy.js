describe('Teste de Ordenação de Produtos', () => {
  beforeEach(() => {
    // Fazer login
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Garantir que a página de inventário foi carregada
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible'); // Produtos devem estar carregados
  });

  it('Deve ordenar os produtos por preço: do mais baixo para o mais alto', () => {
    // Interagir com o dropdown de ordenação
    cy.get('.product_sort_container') // Alternativa ao seletor original
      .should('be.visible') // Garantir que está visível
      .select('lohi'); // Selecionar "Preço: do mais baixo para o mais alto"

    // Verificar a ordenação dos preços
    let productPrices = [];
    cy.get('.inventory_item_price')
      .should('have.length.greaterThan', 0) // Garante que há produtos
      .each(($el) => {
        const price = parseFloat($el.text().replace('$', '').trim());
        productPrices.push(price);
      })
      .then(() => {
        const sortedPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).to.deep.equal(sortedPrices);
      });
  });
});