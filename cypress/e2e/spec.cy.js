describe('Login Test', () => {
  it('deve fazer login e redirecionar para o dashboard', () => {
    cy.visit('http://127.0.0.1:5500/login.html'); 
    cy.get('input[name="username"]').type('admin'); 
    cy.get('input[name="password"]').type('admin'); 
    cy.get('#login-button').click(); 

 
    cy.url().should('include', 'dashboard.html');
  });
});