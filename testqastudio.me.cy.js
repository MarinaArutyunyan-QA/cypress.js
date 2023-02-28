describe('Автотест для https://testqastudio.me/', function () {
    it('Положить товар "Броммс Двухместная кровать" в корзину', function () {
      
        // Открываем страницу сайта
      cy.visit('https://test.qa.studio/');
      
      // Открываем карточку товара
      cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      
      // Меняем количество на три штуки
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
      
      // Нажимаем кнопку "Положить в корзину"
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      
      // Проверяем, что в корзине есть такой товар
      cy.get('.woocommerce-mini-cart-item').contains('БРОММС Двухместная кровать').should('be.visible');

      // Возвращаемся на главную страницу
      cy.get('#cart-modal > .off-modal-layer').click();
      cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
     
      // Открываем карточку товара «КЛЛАРИОН Низкий столик» и добавляем его в корзину
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      
      // Проверяем что в корзине есть такой товар
      cy.get('.woocommerce-mini-cart-item').contains('КЛЛАРИОН Низкий столик').should('be.visible');
      
      // Оформляем заказ
      cy.get('.checkout').click();
      cy.get('#billing_first_name').type('Марина');
      cy.get('#billing_last_name').type('Арутюнян');
      cy.get('#billing_company').type('QA Studio');
      cy.get('#select2-billing_country-container').click();
      cy.get('.select2-search__field').type('Армения').type('{enter}')
      cy.get('#billing_address_1').type('Саят-Нова, 5');
      cy.get('#billing_address_2').type('подъезд 2, этаж 2');
      cy.get('#billing_city').type('Гюмри');
      cy.get('#billing_state').type('Ширакская область');
      cy.get('#billing_postcode').type('3101');
      cy.get('#billing_phone').type('+37444649609');
      cy.get('#billing_email').type('Marishkatish26@gmail.com');
      cy.get('.woocommerce-form__label > span').should('not.be.checked');
      cy.get('strong > .woocommerce-Price-amount > bdi').contains('47,800.00').should('be.visible');
      cy.get('.wc_payment_method > label').check()
      cy.get('#place_order').click();
      })
})