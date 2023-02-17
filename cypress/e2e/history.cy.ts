import { Operations } from 'constants/operations';

describe('History module', () => {
  it('should contains 3 elements', () => {
    cy.visit('/');
    const first = '5';
    const second = '6';
    const itemsLength = 3;

    cy.contains(first).click();
    cy.contains(Operations.multiply).click();
    cy.contains(second).click();
    cy.contains('=').click();
    cy.contains(Operations.plus).click();
    cy.contains(second).click();
    cy.contains('=').click();
    cy.contains(Operations.divide).click();
    cy.contains(first).click();
    cy.contains('=').click();
    cy.get('[data-cy = "history"]')
      .find('[data-cy = "historyElement"]')
      .should('have.length', itemsLength);
  });
});
