import { calculateExpression } from 'utils/calculateExpressionFunction.js';

describe('Arithmetic operations', () => {
  beforeEach(() => {
    cy.visit('/CC');
  });

  it('should properly count long expression', () => {
    cy.get('[data-cy = "keyboard"] > :nth-child(17)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(9)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(11)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(8)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(19)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(5)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(3)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(6)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(2)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(10)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(14)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(15)').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('(6+5)*8-7/3');

      expect(res).to.equal('85.667');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '85.667');
  });

  it('should properly count long expression without multiply sign', () => {
    cy.get('[data-cy = "keyboard"] > :nth-child(3)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(17)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(8)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(11)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(8)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(19)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(4)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(11)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(17)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(3)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(6)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(9)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(19)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(10)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(14)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(15)').click();

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('8(5+5)9+(8-6)/3');

      expect(res).to.equal('720.667');
    });
  });

  it('should properly count long expression with negative values', () => {
    cy.get('[data-cy = "keyboard"] > :nth-child(14)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(5)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(17)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(6)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(13)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(19)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(11)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(9)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(5)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(17)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(6)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(14)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(19)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(11)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(8)').click();
    cy.get('[data-cy = "keyboard"] > :nth-child(15)').click();

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('3*(-2)+6*(-3)+5');

      expect(res).to.equal('-19');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '-19');
  });
});
