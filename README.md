

<h1 align="center">
    <a href="https://gist.github.com/programa-elixir/1bd50a6d97909f2daa5809c7bb5b9a8a" style="color:green">🔗 Resolução desafio stone</a>
</h1>
<p align="center">🧑🏻‍💻 Programa de Formação em Elixir | Teste Técnico</p>

<p align="center">
 <a href="#tecnologias">Tecnologias</a> |
 <a href="#prerequisitos">Pré-requisitos</a> |
 <a href="#resolucao">Resolução</a> |
 <a href="#testes">Especificação dos testes</a> |
 <a href="#autor">Autor</a> 
</p>

<h2 id="tecnologias"> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [Jest](https://jestjs.io/)


<h2 id="prerequisitos"> Pré-requisitos </h2>

Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd js

# Instale as dependências
$ yarn

# Para rodar os testes
$ yarn test

```

<h2 id="resolucao"> Resolução </h2>
Foi criada uma função que recebe como argumentos um array objetos e um array de strings, tendo como retorno um dicionário que tem como key o usuário e como value o valor total dividido de compras.

Além da função principal foram criadas duas funções auxiliares, uma que remove emails duplicados, impedindo que um usuario entre duas vezes na divisão da conta.

```javascript
function removeDuplicates(list) {
  return [...new Set(list)];
}
```
E uma função que computa o valor total, criando primeiramente um array com os valores de cada item e depois fazendo um reduce para chegar num valor final/total.
```javascript
function computeTotal(items) {
  return items.map(item => item.price * item.quantity)
    .reduce((total, price) => total + price, 0);
}
```

A função principal faz entao uma verificação se há arrays vazios no argumento, caso sim, retornara um dicionário vazio. Caso contrário, ela remove emails duplicados (se houverem), computa o valor total , faz a divisão do preço individual levando em conta a quantidade de usuarios.

Depois é feita uma verificação se o total distribuido equivale ao total existente caso nao seja o programa faz a redistribuição e então retornamos como valor final um dicionario contendo o usuario como key e o valor a pagar como value


<h2 id="testes"> Especificação dos testes</h2>
Para o teste foi utilizada a lib Jest. Inclusa como devdependency do projeto no package.json
E foram testados os seguintes requisitos:

  ✓ empty mail
  
  ✓ divide the amount evenly between the number of emails
  
  ✓ divide the amount evenly for repeating decimal giving remaining amount to last user 
  
  ✓ convert repeated mail to single mail

<h2 id="autor"> Autor </h2>
---

<a href="https://github.com/devguga87">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/55398608?s=460&u=ffe85aca65ef7fade2738ed2cc56f888097899a7&v=4" width="100px;" alt=""/>
 <br />
 </a>

Feito por Gustavo Seabra Silva. 

 [![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavoseabra87/)](https://www.linkedin.com/in/guseabra87/) 
[![Gmail Badge](https://img.shields.io/badge/-gustavo.seabra.silva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavo.seabra.silva@gmail.com)](mailto:gustavo.seabra.silva@gmail.com)# stone-elixir-test
