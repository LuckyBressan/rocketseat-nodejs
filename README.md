# Fundamentos do NodeJS

### Padrões de importação

#### CommonJS
Padrão de importação baseado em `require`

#### ESModules

Padrão de importação baseado em `import/export`

Porém node não compreende este padrão, por isto é preciso acessar o package.json e informar ao node que queremos utilizar o type `module`

```json
{
  "name": "01-fundamentos-nodejs",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module", //Assim podemos importar com dependências/libs com import/export
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```

#### Pacotes node VS externos

O novo padrão de importação do node exige que pacotes internos do próprio node sejam importados com o prefixo `node:`

Enquanto que externos são importados baseados no nome da dependência, sem nenhum prefixo.

```javascript

//Interno
import http from 'node:http'

//Externo
import fastify from 'fastify'

```

# HTTP

### Métodos

- GET
    - Buscar recurso do back-end

- POST
    - Criar um recurso

- PUT
    - Atualizar um recurso do back-end
    - Praticamente atualiza a entidade como um todo

- PATCH
    - Atualizar uma informação específica de um recurso do back-end
    - Atualiza uma informação específica, algo único

- DELETE
    - Deltar um recurso do back-end

# Stateful VS Stateless

- Stateful
    - Sempre tem alguma informação sendo guardada em memória, necessita das informações em memória
    - Localmente

- Stateless
    - Não depende de memória, salva as informações em dispositivos externos (BDs, arquivos)

# JSON

Estrutura de dados comumente usada para comunicação de dados entre Front-end e Back-end

# Headers

Metadados, informações adicionais que não tem a ver com o dado retornado do backend, mas a tem haver com como lidar com ele

# HTTP Status Code

Código que representa a resposta HTTP da request realizada

- 100 - 199
    - Resposta informacional
- 200 - 299
    - Resposta positiva (sucess)
- 300 - 399
    - Mensagem de redirecionamento
- 400 - 499
    - Resposta de erro (client)
- 500 - 599
    - Resposta de erro (server)

# Stream

Ler pequenas partes de algo e trabalhar com isto, mesmo sem ter o arquivo completo

# Buffers

# Testes

Tipos de testes existentes

- Unitários
    - testa apenas uma unidade da sua aplicação, você testa especificamente uma função ou uma unidade específica da aplicação
- integração
    - Testa a comunicação entre duas ou mais unidades
- e2e - ponta a ponta
    - Simulam um usuário operando na nossa aplicação
    - Faz tudo que um usuário faria normalmente na nossa aplicação
    - front-end: "abre a página de login, digite o texto X no campo com ID email, clique no botão
    - back-end: chamadas http, websockets

Jamais escreva um teste que dependa de outro teste

## Pirâmide de testes

- E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)
    - Porém não são utilizados em todos os cantos devidos ao seu custo e lentidão
- Integração
- Unitários (são base da pirâmide)