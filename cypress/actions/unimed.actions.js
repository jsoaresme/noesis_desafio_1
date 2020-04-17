class Actions {

  pageMedicalGuide() {
    cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}/guia-medico`);
  }

  typeSearchDoctor(text) {
    cy.get('#campo_pesquisa').type(text);
  }

  clickButtonSearch() {
    cy.get('#btn_pesquisar').click();
  }

  typeState(text) {
    cy.get('form > div:nth-child(1) > div:nth-child(1) > div > div > div:first-child').type(`${text} {enter}`);
  }

  typeCity(text) {
    cy.get('form > div:nth-child(1) > div:nth-child(2) > div > div > div:first-child').type(`${text} {enter}`);
  }

  selectMedicalUnit() {
    cy.get('input[type="radio"]').click();
  }

  clickButtonContinue() {
    cy.get('button[class="btn btn-success"]').click();
  }

  nextPageResult() {
    cy.get('div[class="span12 pagination text-center no-margin-left"] > div ul li a[class="proximo"]').click();
  }

}

export default Actions;
