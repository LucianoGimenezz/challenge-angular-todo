/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("there should be a button", () => {
      cy.get('[data-id="button"]')
  })

  it("When the button is pressed, a modal must display", () => {
    cy.get('[data-id="button"]').click()
    cy.get('input[type="text"]')
  })

  it("If the button 'Add' is pressed with the input empty, an Error must be show", () => {
    cy.get('[data-id="button"]').click()
    cy.get('button[label="Add"]').click()
    cy.get('span').should('have.class', 'input__invalid__message')
  })

  it("With an value in the input when the button 'Add' is pressed, a new todo should be created", () => {


    cy.createTodo()

    cy.get('[data-id="todo_container"]')
      .children()
      .its('length')
      .as('cantTodos')

    cy.createTodo()

    cy.get('@cantTodos')
      .should('eq', 2)
    })

  it("a Todo should be delete when the button trash is pressed", () => {
      cy.createTodo()
      cy.createTodo()

      cy.get('[data-id="button_container"]').first().within(() => {
        cy.get('button').eq(1).click()
      })

      cy.get('[data-id="todo_container"]')
      .children()
      .its('length')
      .should('eq', 1)
  })

})
