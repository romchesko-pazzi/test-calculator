import { Operations } from 'constants/operations';

describe('Keyboard-Display module', () => {
  context('Removing elements', () => {
    const firstOperand = '5';
    const secondOperand = '7';

    beforeEach(() => {
      cy.visit('/');
      cy.contains(firstOperand).click();
      cy.contains(Operations.multiply).click();
      cy.contains(secondOperand).click();
    });
    it('should remove only one element', () => {
      cy.contains(Operations.removeElement).click();
      cy.get('[data-cy = "currOperand"]').should('be.empty');
      cy.get('[data-cy = "prevOperand"]').should(
        'have.text',
        firstOperand + Operations.multiply,
      );
    });
    it('should remove all elements', () => {
      cy.get('button').contains(Operations.removeAll).click();
      cy.get('[data-cy = "currOperand"]').should('be.empty');
      cy.get('[data-cy = "prevOperand"]').should('be.empty');
    });
  });

  it("shouldn't contain two zero", () => {
    cy.visit('/');
    const firstOperand = '0';

    cy.get('button').contains(firstOperand).click();
    cy.get('button').contains(firstOperand).click();
    cy.get('[data-cy = "currOperand"]').should('have.text', firstOperand);
  });
});
