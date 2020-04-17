import Actions from '../../actions/unimed.actions.js';
import Hooks from '../hooks.js';

const action = new Actions();
const hooks = new Hooks();

/* Cenário: Realizar pesquisa de medicos do Rio de Janeiro validando a Especialidade e Cidade */
Given('que estou na página "Guia Médico"', () => {
  action.pageMedicalGuide();
});
    
When('faço uma pesquisa por médicos do Rio de Janeiro capital', () => {
  action.typeSearchDoctor(hooks.search);
  action.clickButtonSearch();
  action.typeState(hooks.state);
  action.typeCity(hooks.city);
  action.selectMedicalUnit();
  action.clickButtonContinue();
});
    
Then('visualizo a listagem de médicos', () => {
  cy.get('#resultado0 > div > p > span:nth-child(2)').should('have.text', 'Anestesiologia');
  cy.get('#resultado0 #txt_endereco p').contains('Rio de Janeiro');
});

/* Cenário: Realizar pesquisa de medicos do Rio de Janeiro validando a sua Cidade */
Given('que estou na página "Guia Médico"', () => {
  action.pageMedicalGuide();
});
    
When('faço uma pesquisa por médicos do Rio de Janeiro capital', () => {
  action.typeSearchDoctor(hooks.search);
  action.clickButtonSearch();
  action.typeState(hooks.state);
  action.typeCity(hooks.city);
  action.selectMedicalUnit();
  action.clickButtonContinue();
});
    
Then('visualizo a listagem de médicos do Rio de janeiro', () => {
  for (let index = 0; index < 20; index++) {
    cy.get(`#resultado${index} #txt_endereco p`).should('contain', 'Rio de Janeiro');
    cy.get(`#resultado${index} #txt_endereco p`).should('not.contain', 'São Paulo');
  }

  action.nextPageResult();

  for (let index = 0; index < 20; index++) {
    cy.get(`#resultado${index} #txt_endereco p`).should('contain', 'Rio de Janeiro');
    cy.get(`#resultado${index} #txt_endereco p`).should('not.contain', 'São Paulo');
  }

  action.nextPageResult();

  for (let index = 0; index < 20; index++) {
    cy.get(`#resultado${index} #txt_endereco p`).should('contain', 'Rio de Janeiro');
    cy.get(`#resultado${index} #txt_endereco p`).should('not.contain', 'São Paulo');
  }
});