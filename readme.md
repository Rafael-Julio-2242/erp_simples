# ERP Simples

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

ERP Simples é um projeto de código aberto desenvolvido para fins educacionais, visando demonstrar a implementação de um sistema ERP (Enterprise Resource Planning) utilizando tecnologias modernas de desenvolvimento web.

## 🚀 Funcionalidades

### Módulo de Usuários
- ✅ CRUD Básico de Usuários
  - Criação, leitura, atualização e remoção de usuários
  - Validação de dados com Zod
  - Tratamento de erros personalizado

- 🔒 Sistema de Módulos e Permissões
  - ✅ Estrutura de módulos implementada
  - ✅ Relacionamento muitos-para-muitos entre usuários e módulos
  - ✅ Controle de administração por módulo
  - 🔄 Autenticação e autorização em desenvolvimento
  - 🔄 Middleware de verificação de acesso em desenvolvimento

- 👥 Perfis de Acesso
  - ✅ Usuários podem ser administradores globais (`isAdmin`)
  - ✅ Controle de acesso por módulo através da tabela `user_modules`
  - 🔄 Sistema de permissões granulares por módulo em desenvolvimento

### Módulo Financeiro (Em breve)
- [ ] Contas a pagar
- [ ] Contas a receber
- [ ] Relatórios financeiros

### Módulo de Vendas (Em breve)
- [ ] Cadastro de clientes
- [ ] Pedidos de venda
- [ ] Faturamento

### Módulo de Estoque (Em breve)
- [ ] Cadastro de produtos
- [ ] Controle de estoque
- [ ] Movimentações

## 🛠️ Tecnologias

- **Backend**: Node.js com TypeScript
- **Framework Web**: Express
- **Banco de Dados**: PostgreSQL com TypeORM
  - Migrações automáticas
  - Relacionamentos bem definidos
  - Entidades tipadas
- **Sistema de Módulos**:
  - Estrutura flexível para controle de acesso
  - Relacionamento muitos-para-muitos entre usuários e módulos
  - Controle de administração por módulo
- **Segurança**:
  - Bcrypt para hashing de senhas
  - Prontos para implementação de JWT (em breve)
- **Validação**: Zod para schemas e DTOs
- **Testes**: Jest para testes unitários e de integração
- **Containerização**: Docker para ambiente de desenvolvimento consistente

## 📂 Estrutura do Projeto

```
src/
├── modules/               # Módulos da aplicação
│   ├── users/            # Módulo de usuários
│   │   ├── dto/          # Objetos de transferência de dados
│   │   ├── entities/     # Entidades do banco de dados
│   │   ├── usecases/     # Casos de uso
│   │   └── repository/   # Repositórios de dados
│   └── ...               # Outros módulos
│
├── infrastructure/        # Infraestrutura
│   ├── http/             # Configurações HTTP/Express
│   ├── db/               # Configurações do banco de dados
│   └── factories/        # Fábricas para injeção de dependências
│
└── shared/               # Código compartilhado
    ├── errors/           # Erros personalizados
    ├── auth/             # Autenticação e autorização
    └── utils/            # Utilitários gerais
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- PostgreSQL 13+
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/erp_simples.git
   cd erp_simples
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. Execute as migrações do banco de dados:
   ```bash
   npm run typeorm migration:run
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📚 Documentação da API

A documentação da API está disponível em `/api-docs` quando o servidor estiver em execução.

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

## ✨ Agradecimentos

- [TypeORM](https://typeorm.io/)
- [Express](https://expressjs.com/)
- [Zod](https://zod.dev/)
- E todos os outros projetos incríveis de código aberto que tornam este projeto possível!
