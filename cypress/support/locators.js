/// <reference types="cypress"/>

const locators = {
    HOME: {
        XP_SOMOS_HUMANOS: '//span[contains(text(), "SOMOS HUMANOS")]',
        XP_SOMOS_DIGITAIS: '//span[contains(text(), "SOMOS DIGITAIS")]',
        XP_SOMOS_VERITY: '//span[contains(text(), "SOMOS VERITY")]',
        XP_AGENTES: '//span[contains(text(), "Agentes")]',
    },
    MENU:{
        XP_VERITY_LAB: '//p[@class][contains(text(),"VERITY LAB")]',
        XP_CONTEUDO: '//span[contains(text(),"Conteúdo exclusivo")]',
        XP_VERITY_LAB_TXT: '//span[contains(text(),"VERITY LAB")]'
    },
    FORM_VERITY: {
        NOME_COMPLETO: '#input_comp-kex0kjkv',
        EMPRESA: '//input[@name="empresa"]',
        EMAIL: '#input_comp-kex0kjl73',
        TELEFONE: '#input_comp-kex0kjla1',
        XP_CHECKBOX: '//label[@id="comp-kex0pigp"]/*[1]',
        BTN_PARTICIPAR: '[data-testid=buttonElement]'
    }
}

export default locators;