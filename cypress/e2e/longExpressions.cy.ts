import { calculateExpression } from '@/utils/calculate/calculateExpression.js';

describe('Long expressions', () => {
  beforeEach(() => {
    cy.visit('/CC');
  });

  it('should properly count long expression', () => {
    const keyboardCyChildren = [17, 9, 11, 8, 19, 5, 3, 6, 2, 10, 14, 15];

    for (let i = 0; i < keyboardCyChildren.length; i += 1) {
      cy.get(`[data-cy="keyboard"] > :nth-child(${keyboardCyChildren[i]})`).click();
    }

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('(6+5)*8-7/3');

      expect(res).to.equal('85.667');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '85.667');
  });

  it('should properly count long expression without multiply sign', () => {
    const keyboardCyChildren = [3, 17, 8, 11, 8, 19, 4, 11, 17, 3, 6, 9, 19, 10, 14, 15];

    for (let i = 0; i < keyboardCyChildren.length; i += 1) {
      cy.get(`[data-cy="keyboard"] > :nth-child(${keyboardCyChildren[i]})`).click();
    }

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('8(5+5)9+(8-6)/3');

      expect(res).to.equal('720.667');
    });
  });

  it('should properly count long expression with negative values', () => {
    const keyboardCyChildren = [14, 5, 7, 7, 22, 11, 9, 5, 4, 18, 18, 22, 10, 12, 13, 15];

    for (let i = 0; i < keyboardCyChildren.length; i += 1) {
      cy.get(`[data-cy="keyboard"] > :nth-child(${keyboardCyChildren[i]})`).click();
    }

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('3*(-44)+6*(-900)/12');

      expect(res).to.equal('-582');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '-582');
  });
});
