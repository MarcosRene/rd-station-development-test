<p align="center">
 <img
    src=".github/symbol.svg"
    alt="RD Symbol"
    title="RD Symbol"
    width="120px"
    height="120px"
  />
<p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MarcosRene/rd-station-development-test">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/MarcosRene/rd-station-development-test">

  <a href="https://github.com/MarcosRene/rd-station-development-test/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MarcosRene/rd-station-development-test">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/MarcosRene/rd-station-development-test/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/MarcosRene/rd-station-development-test?style=social">
  </a>
</p>

<p>
   <img
    src=".github/screen.gif"
    alt="Gerador de cartão de visita"
    title="Gerador de cartão de visita"
  />
</p>

## 💻 Sobre

Conheça o fantástico (e fictício) Gerador de Cartão de Visita do Resultados Digitais,
uma aplicação que permite que os usuários criem cartões de visitas digitais. Nesta
aplicação, os usuários devem preencher os campos da primeira página e assim que
avançarem poderão visualizar seu novo cartão de visitas.

### Desenvolvimento:

- Sua página deve ser responsiva, ou seja, adaptar-se aos diversos tamanhos
  de tela. No Figma estão as representações das telas com largura de 360px
  (mobile) e 1440px (desktop).
  Dica: Atente-se a largura máxima dos containers nestes tamanhos e como
  eles se comportam em tamanhos maiores e menores.
- Embora essa seja uma aplicação fictícia, fique atento às boas práticas de
  SEO, acessibilidade e HTML semântico.

### Formulário:

- No formulário todos os campos são obrigatórios e exigem validações
- O campo nome só será válido se o valor tiver ao menos dois caracteres
- O campo email só será válido se o valor corresponder a um endereço de
  email
- O campo de telefone deve conter a máscara (99) 9999[9]-9999, com o dígito
  entre os colchetes sendo opcional, cobrindo assim números de telefones
  fixos e celulares nacionais com ou sem o primeiro dígito 9.
- Link política de privacidade: https://legal.rdstation.com/pt/privacy-policy/

### Resultado:

- O cartão de visitas gerado deve utilizar os dados do formulário da tela
  anterior
- O botão para download do cartão não deve ter ações e seu estado é
  desabilitado
- O botão para retornar à tela anterior deve limpar todos os campos do
  formulário
- O link de “faça um teste grátis no RD Station Marketing” deve apontar para
  https://app.rdstation.com.br/signup e abrir em uma nova aba.

---

## 🛠 Tecnologias

Ferramentas utilizadas na contrução do projeto:

- **[Nextjs](https://nextjs.org/)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[JsonServer](https://www.npmjs.com/package/json-server)**

#### 🧭 Rodando a aplicação

```bash
# Faça donwload da aplicação
$ git clone git@github.com:MarcosRene/rd-station-development-test.git

# Vá para a pasta da aplicação `rd-station-development-test`
$ cd rd-station-development-test

# Instale as dependências
$ pnpm install

# Execute a aplicação em modo de desenvolvimento
$ pnpm dev

# A aplicação inciará na porta 3000
# Em seguida abra um novo terminal e execute o seguite comando.
$ pnpm run server

# ANesse servidor serão salvas as informações. Consistem em um aquivo `api-cards.json` na raiz do projeto.
# 👉 Você também pode utilizar o `yarn` ou `npm` pra executar a aplicação 👈
```

## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

Feito com 💜 por Marcos Renê 👋🏽 [Entre em contato!](https://www.linkedin.com/in/marcosrene/)
