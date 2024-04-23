/// <reference types="cypress" />

describe('Login Desafio bolsista QA', () => {
    beforeEach(() => {
        cy.visit('https://desafio.qa.bridge.ufsc.br/api/users/logout')
        cy.get('#usuario').type('santosluiz1912@gmail.com')
        cy.get('#password').type('WDfJg3NydHkhna7Nsa4KIw')
        cy.get('#termos-de-uso').click()
        cy.get('.btn-acessar').click()
        cy.get('.btn-acessar').should('contain', 'Iniciar desafio')
    })
    beforeEach(() => {
        cy.get('.btn-acessar').click()
    })

    it('Deve preencher e enviar o formulário de cadastro', () => {
        // Preencha os campos do formulário com dados válidos
        cy.get('#cpf').type('08276149936')
        cy.get('#cns').type('166682340810004')
        cy.get('#nome-completo').type('Luiz Santos')
        cy.get('#data-nascimento').type('2000-12-19')
        cy.get('#sexo').type('Masculino')
        cy.get('#telefone-residencial').type('48933338579')
        cy.get('#telefone-celular').type('48999971486')
        cy.get('.btn-salvar').click()
        cy.get('span').should('contain', 'Cadastro realizado com sucesso')
    })
})