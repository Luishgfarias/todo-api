```
# 📋 ToDo API - Lista de Tarefas com Usuários

Uma API RESTful para gerenciamento de **tarefas pessoais por usuário**, com **autenticação JWT**.  
Desenvolvida com **Node.js**, **Express**, **Prisma**, **TypeScript** e **MySQL**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- Prisma ORM
- MySQL
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📌 Funcionalidades

### 🧑‍💻 Usuários
- Cadastro de novos usuários
- Login com geração de token JWT
- Buscar, atualizar e excluir o próprio usuário

### ✅ Tarefas
- Criar tarefa
- Listar tarefas do usuário logado
- Buscar tarefa por ID
- Atualizar tarefa
- Excluir tarefa

> **🔐 Todas as rotas de tarefas exigem autenticação JWT.**

---

## 📂 Estrutura básica do projeto

```

.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── libs/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

````

---

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/Luishgfarias/todo-api.git
cd todo-api
````

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o ambiente:**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo (ajuste com seus dados de banco e segredo JWT):

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
```

4. **Rode as migrations:**

```bash
npx prisma migrate dev
```

5. **Inicie o servidor:**

```bash
npm run dev
```

Servidor estará disponível por padrão em:
`http://localhost:3000`

## ✅ Requisitos

* Node.js >= 18.x
* MySQL
* npm

---

## 📑 Licença

Projeto desenvolvido para fins de estudo.
Licença: **MIT**

```

---

Se quiser, posso te gerar um exemplo de collection do **Postman** ou **Insomnia** com todas as requisições já prontas também. Quer?
```
