import { Operations } from 'constants/operations';
import { evaluateFunc } from 'utils/evaluate';

describe('Arithmetic operations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should multiply properly', () => {
    const first = '5';
    const second = '6';

    cy.contains(first).click();
    cy.contains(Operations.multiply).click();
    cy.get('[data-cy = "currOperand"]').should('be.empty');
    cy.contains(second).click();
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = evaluateFunc(first, second, Operations.multiply);

      expect(res).to.equal('30');
    });
  });

  it('should add up properly', () => {
    const first = '2';
    const second = '9';

    cy.contains(first).click();
    cy.contains(Operations.plus).click();
    cy.get('[data-cy = "currOperand"]').should('be.empty');
    cy.contains(second).click();
    cy.get('[data-cy = "currOperand"]').should('have.text', second);
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = evaluateFunc(first, second, Operations.plus);

      expect(res).to.equal('11');
    });
  });

  it('should subtract properly', () => {
    const first = '2';
    const second = '9';

    cy.contains(first).click();
    cy.contains(Operations.minus).click();
    cy.get('[data-cy = "currOperand"]').should('be.empty');
    cy.contains(second).click();
    cy.get('[data-cy = "currOperand"]').should('have.text', second);
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = evaluateFunc(first, second, Operations.minus);

      expect(res).to.equal('-7');
    });
  });

  it('should divide properly', () => {
    const first = '2';
    const second = '9';

    cy.contains(first).click();
    cy.contains(Operations.divide).click();
    cy.get('[data-cy = "currOperand"]').should('be.empty');
    cy.contains(second).click();
    cy.get('[data-cy = "currOperand"]').should('have.text', second);
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = evaluateFunc(first, second, Operations.divide);

      expect(res).to.equal('0.222');
    });
  });
});
