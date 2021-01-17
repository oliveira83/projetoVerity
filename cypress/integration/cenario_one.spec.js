/// <reference types="cypress"/>

import loc from '../support/locators.js';

describe('Encontrar elementos', () => {
  before(function () {
    cy.visit('https://www.verity.com.br/', {timeout: 30000});
  })
  
  it('Verificar se os elementos são aprensetados na home', () => {
    cy.xpath(loc.HOME.XP_SOMOS_HUMANOS).should('be.visible')
    cy.xpath(loc.HOME.XP_SOMOS_DIGITAIS).should('be.visible')
    cy.xpath(loc.HOME.XP_SOMOS_VERITY).should('be.visible')
    cy.xpath(loc.HOME.XP_AGENTES).should('be.visible')
  })
  
  it('Verificar e interagir com os elementos na página /verity-lab', () => {
    cy.fixture('dadosForm.json').then(function(dados) {
      cy.xpath(loc.MENU.XP_VERITY_LAB).click();
      cy.xpath(loc.MENU.XP_CONTEUDO).should('be.visible');
      cy.xpath(loc.MENU.XP_VERITY_LAB_TXT).should('be.visible');
      cy.preencheForm(dados.nome_completo,dados.email,dados.telefone)
    })

  })
})