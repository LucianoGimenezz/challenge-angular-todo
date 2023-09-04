// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///  <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @example cy.creaeTodo()
     */
    createTodo: () => Chainable<Element>
  }
}
