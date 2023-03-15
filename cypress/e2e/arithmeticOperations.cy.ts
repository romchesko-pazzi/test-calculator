import { Brackets } from 'constants/brackets';
import { Operations } from 'constants/operations';
import { calculateExpression } from 'utils/calculateExpressionFunction.js';

describe('Arithmetic operations', () => {
  beforeEach(() => {
    cy.visit('/CC');
  });

  it('should multiply properly', () => {
    cy.contains('5').click();
    cy.get('button').contains('.').click();
    cy.contains('6').click();
    cy.contains(Operations.multiply).click();
    cy.contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('6').click();
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression(`5.6*0.6`);

      expect(res).to.equal('3.360');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '3.360');
  });

  it('should comply math operators', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains(Operations.multiply).click();
    cy.get('button').contains('9').click();
    cy.get('button').contains(Operations.plus).click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(Operations.multiply).click();
    cy.get('button').contains('6').click();
    cy.get('button').contains(Operations.equals).click();
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('7*9+2*6');

      expect(res).to.equal('75');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '75');
  });

  it('should add up properly', () => {
    cy.get('button').contains(Brackets.leftBracket).click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(Operations.plus).click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains(Brackets.rightBracket).click();
    cy.get('button').contains(Operations.plus).click();
    cy.get('button').contains('6').click();
    cy.get('button').contains(Operations.equals).click();

    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression(`(2+0.3)+6`);

      expect(res).to.equal('8.300');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '8.300');
  });

  it('should subtract properly', () => {
    cy.get('button').contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains(Operations.minus).click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains(Operations.equals).click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('0.5-36');

      expect(res).to.equal('-35.500');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '-35.500');
  });

  it('should divide properly', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains(Operations.divide).click();
    cy.get('button').contains('9').click();
    cy.get('button').contains(Operations.equals).click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('2/9');

      expect(res).to.equal('0.222');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '0.222');
  });

  it('should be an error "Cannot divide by zero"', () => {
    cy.get('button').contains('6').click();
    cy.get('button').contains(Operations.divide).click();
    cy.get('button').contains('0').click();
    cy.get('button').contains(Operations.equals).click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      try {
        calculateExpression('6/0');
      } catch (e: unknown) {
        const error = e as SyntaxError;

        expect(error.message).to.equal('Cannot divide by zero');
      }
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', 'Cannot divide by zero');
  });

  it('should show the remainder of the division correctly', () => {
    cy.contains('5').click();
    cy.contains(Operations.plus).click();
    cy.contains('4').click();
    cy.contains(Brackets.leftBracket).click();
    cy.contains('8').click();
    cy.contains(Operations.remainderOfDivision).click();
    cy.contains('3').click();
    cy.contains(Brackets.rightBracket).click();
    cy.contains('=').click();
    cy.get('[data-cy = "prevOperand"]').should('be.empty');
    cy.get('[data-cy = "currOperand"]').should(() => {
      const res = calculateExpression('5+4(8%3)');

      expect(res).to.equal('13');
    });
    cy.get('[data-cy = "currOperand"]').should('have.text', '13');
  });
});
