describe('Автотест для https://sdoba66.ru/', function () {
    it('Оформление заказа товара "Торт сливочно-черничный"', function () {
      // Открываем страницу
      cy.visit('https://sdoba66.ru/');

      // Выбираем раздел "Меню"
      cy.get('tr > :nth-child(1) > .wrap > .dropdown-toggle > :nth-child(1)').click();
      cy.get(':nth-child(3) > .icons_fa').click();

      // Находим товар "Торт сливочно-черничный" и добавляем в корзину
      cy.get('#bx_2814395531_2983 > .inner_wrap').click();
      cy.get('.add_iiko_cart').dblclick();

      // Переходим в корзину и проверяем что такой товар отображается в ней
      cy.get('.top_basket > .basket-link').click();
      cy.get('.dark_link > span').contains('Торт сливочно-черничный').should('be.visible');
      cy.get('.basket-table__footer > :nth-child(2) > :nth-child(2) > span').contains('1780').should('be.visible');

      // Выбираем способ доставки "Доставка курьером"
      cy.get(':nth-child(1) > .card > .card-body > :nth-child(2) > .form-check-label > .delivery-name').click();      
      
      // Оплата картой
      cy.get('[data-paysystem-block="12"] > .form-check-label > .delivery-name').click();
     
      // Получатель
      cy.get('#prop33').type('Марина');
      cy.get('#prop34').type('+79826917789');
      cy.get('#prop35').type('marimaarut26@gmail.com');
      
      // Способ получения
      cy.get('.ik_select_link').click();

      // Способ оплаты
      cy.get('.ik_select_active > .ik_select_option_label').click();
      
      // Контакты и адрес
      cy.get('#prop38').type('59'); 
      cy.get('#prop40').type('16');
      cy.get('#prop41').type('3');
      cy.get('#prop42').type('4');
      cy.get('#gi_loc_prop37').type('Космонавтов проспект');

      // находим элемент, который открывает календарик
      cy.get('#datetimepicker').click();
      cy.get('.xdsoft_monthpicker > .xdsoft_next').click();

      // Выбираем дату
      cy.get(':nth-child(5) > .xdsoft_day_of_week3 > div').click();
      cy.get('#main > div.xdsoft_datetimepicker.xdsoft_noselect.xdsoft_ > div.xdsoft_timepicker.active > div > div.xdsoft_time_variant > div:nth-child(9)').click();
      
      // Оставляем комментарий к заказу
      cy.get('#gi_comment').type('Спасибо! И хорошего дня)');
      
      //cy.get('.text-right > .btn').click() // Заказываем
      })
})