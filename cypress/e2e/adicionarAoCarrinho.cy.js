describe('Add Product to Cart', () => {
  it('Should add a product to the cart and verify cart contents', () => {
    // Realizar o login de forma customizada
    cy.login('standard_user', 'secret_sauce')

    // Captura o nome do primeiro produto para validação
    cy.get('.inventory_item').first().find('.inventory_item_name').invoke('text').then((productName) => {
      // Adiciona o produto ao carrinho
      cy.get('.inventory_item').first().find('.btn_inventory').click()

      // Verifica que o número de itens no carrinho foi atualizado
      cy.get('.shopping_cart_link').should('contain', '1').click()

      // Valida que o produto correto foi adicionado ao carrinho
      cy.get('.cart_item').first().find('.cart_item_label').should('contain', productName)
    })
  })
})