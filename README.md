# HackaWork versão Desktop

Aqui você escolhe o desafio, acumula experiência e ainda pode aprender muito mais com as empresas parceiras!

![hw.png](hw.png)

## Desenvolvido com:

- [React 17.0.1](https://pt-br.reactjs.org/docs/getting-started.html)
- Redux 7.2.2
- Redux-Thunk 2.3.0
- React-Router-Dom 5.2.0
- Axios 0.21.1
- Styled-Components 5.2.1
- Andt Design 0.21.1
- Framer-Motion 3.3.0
- EsLint
- [Nodejs](https://nodejs.org/en/)

### Estrutura de arquivos

```
├── src/
│   ├── assets/
│   │   └── images
│   ├── components/
│   │   ├── challenge/
│   │   └── popUp/
│   ├── pages/
│   │   ├── dasafios/
│   │   └── home/
|   |   └── login/
│   ├── Redux/
│   │    ├── actions/
│   │   └── reducers/
│   │    └── store/
│   ├── routes/
│   │    ├── link/
│   │   └── route/
│   │     └── helper.js
│   ├── services/
│
├── App.css
├── App.js
├── index.js
├── .gitignore
├── reportWebVitals.js
├── serviceWorker.js
├── setupTests.js
├── jsconfig.js
├── package.json
└── README.md
```

### Instalação

```
yarn install
```

### Rodando a aplicação:

```
yarn start
```

### Testando

- Para o desenvolvimento dos testes foram utilizadas as seguintes dependências:

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event

### Rodando os testes:

```
yarn test
```

### Back End:

- Essa aplicação utilizou a seguinte [API](https://github.com/FrancielledeAbreu/provi-hack-woman), também desenvolvida por nós.

- Foi realizado deploy da API no Heroku

### Primeira Versão:

- Foi realizado o deploy do front no Vercel [Vercel](https://vercel.com/)
- Endereço da aplicação: https://hackawork.vercel.app/

#### Dados login App:

```
  Email: novousuario@gmail.com
  Senha: @123456
```

- Obs: A autenticação do login está sendo realizada por meio de uma requisição get, portanto, pode haver um delay ao clicar em entrar na tela de login, sendo necessário mais de um clique no botão entrar. Situação priorizada para melhoria nas próximas versões.
