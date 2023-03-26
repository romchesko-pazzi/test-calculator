import { Operations } from '@/constants/operations';

describe('History module', () => {
  beforeEach(() => {
    const first = '5';
    const second = '6';

    cy.visit('/');
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
  });
  it('should contain 3 elements', () => {
    const itemsLength = 3;

    cy.get('[data-cy = "history"]')
      .find('[data-cy = "historyElement"]')
      .should('have.length', itemsLength);
  });

  it('should remove history', () => {
    cy.get('a').contains('Settings').click();
    cy.get('[data-cy = "removeBtn"]').click();
    cy.get('a').contains('Home').click();
    cy.get('[data-cy = "history"]')
      .find('[data-cy = "historyElement"]')
      .should('have.length', 0);
  });
});
