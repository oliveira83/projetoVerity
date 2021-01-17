// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import loc from './locators';

Cypress.Commands.add('preencheForm', (nome, email, telefone) => {
    cy.get(loc.FORM_VERITY.NOME_COMPLETO).type(nome);
    cy.get(loc.FORM_VERITY.EMAIL).type(email);
    cy.get(loc.FORM_VERITY.TELEFONE).type(telefone);
    cy.xpath(loc.FORM_VERITY.XP_CHECKBOX).check();
    cy.get(loc.FORM_VERITY.BTN_PARTICIPAR).click();
})
