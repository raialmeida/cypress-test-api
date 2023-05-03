# cypress-test-api
Cypress test API ServeRest

Projeto: Automação API

Informações básicas para realizar a instalação das tecnologias e configurações para automatizar os testes. 

**Plataforma**: Click para consultar a plataforma [serverest](https://serverest.dev/)

## Dependências utilizado com cypress no projeto.

+ [Allure Report](https://github.com/Shelex/cypress-allure-plugin)
+ [Joi](https://joi.dev/api/)
+ [Cypress ESLint Plugin](https://github.com/cypress-io/eslint-plugin-cypress)
+ [cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep)

## Instalação do Gerenciado de Pacotes NodeJS.

Para instalar o NodeJs acesse o site oficial, click em Download [Versão LTS é a mais estável](https://nodejs.org/en/). 


## Instalação do Cypress e dependências

### No terminal execute o comando para instalação:

```
npm install
```

## Execução dos testes

### Para executar os testes pela interface do cypress:

```
npm run cy:open
```
### Para executar todos os testes, execute no terminal: 

```
npm run cy:run
```

### Para executar os testes por tags, execute no terminal:

```
npx cypress run -e grepTags=@tag
```

### Para executar os testes com report Allure, execute no terminal:

```
npx cypress run -e allure=true
```

Após a execução dos testes, execute os comando abaixo para gerar e abrir o report:
```
allure generate
```
```
allure open
```
 
## Regras de Organização

Versão 1.0 

