# language: pt
# encoding: utf-8

Funcionalidade: Desafio Noesis 1

  Cenário: Realizar pesquisa de medicos do Rio de Janeiro validando a Especialidade e Cidade
    Dado que estou na página "Guia Médico"
    Quando faço uma pesquisa por médicos do Rio de Janeiro capital
    Então visualizo a listagem de médicos

  Cenário: Realizar pesquisa de medicos do Rio de Janeiro validando a sua Cidade
    Dado que estou na página "Guia Médico"
    Quando faço uma pesquisa por médicos do Rio de Janeiro capital
    Então visualizo a listagem de médicos do Rio de janeiro
