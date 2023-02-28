describe('Форма логина и пароля', function () {
    it('Правильный логин, правильный пароль', function () {
      // Открываем страницу логина
      cy.visit('https://login.qa.studio/');

      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();

      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
      })

    it('Восстановление пароля по копке "Забыли пароль"', function () {

      cy.visit('https://login.qa.studio/');
      
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('qwerty@123.ru');
      cy.get('#restoreEmailButton').click();

      cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
      })

    it('Правильный логин, неправильный пароль', function () {
      
      cy.visit('https://login.qa.studio/');

      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').click();

      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Неправильный логин, правильный пароль', function () {
      
        cy.visit('https://login.qa.studio/');
  
        cy.get('#mail').type('german@dolnikov1.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
  
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
      })

      it('Логин без @, правильный пароль', function () {
      
        cy.visit('https://login.qa.studio/');
  
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
  
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
      })

      it('Привидение к строчным буквам в логине', function () {
      
        cy.visit('https://login.qa.studio/');
  
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
  
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
      })
})