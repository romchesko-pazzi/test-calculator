import { ThemeEnum } from 'assets/interfaces/styled';

describe('Change theme module', () => {
  it('theme should be changed', () => {
    cy.visit('/settings');
    cy.get('h3').should('have.css', 'color').and('equal', 'rgb(25, 25, 27)');

    cy.get('span').contains(ThemeEnum.light).click();
    cy.get('li').contains(ThemeEnum.dark).click();

    cy.get('h3').should('have.css', 'color').and('equal', 'rgb(255, 255, 255)');

    cy.get('span').contains(ThemeEnum.dark).click();
    cy.get('li').contains(ThemeEnum.light).click();

    cy.get('h3').should('have.css', 'color').and('equal', 'rgb(25, 25, 27)');
  });
});
