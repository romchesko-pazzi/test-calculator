describe('Navigation module', () => {
  it('should change page', () => {
    cy.visit('/');
    cy.get('a').contains('Settings').click();
    cy.url().should('include', '/settings');
    cy.get('[data-cy = "removeBtn"]').should('have.text', 'Clear all history');
  });
});

export {};
