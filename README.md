# Semaforo_Balaca

Aplicação web desenvolvida em **Next.js + TypeScript** para controle de um semáforo integrado ao backend do ambiente interno.

O sistema permite:

* Consultar o estado atual do semáforo
* Alternar entre **aberto (verde)** e **fechado (vermelho)**
* Visualizar o estado em um painel visual simples
* Atualizar o status manualmente
* Integrar com backend existente

A aplicação foi criada como versão web de uma tela originalmente desenvolvida em Flutter.

---

# Tecnologias utilizadas

* Next.js
* React
* TypeScript
* CSS Modules
* App Router
* Route Handlers (API interna do Next.js)

---

# Objetivo do projeto

Disponibilizar uma **interface web simples e rápida** para operação do semáforo, permitindo:

* Consulta do estado atual
* Alternância do estado do semáforo
* Visualização visual das luzes
* Integração com backend existente

O sistema foi desenvolvido para rodar tanto em **ambiente de desenvolvimento quanto produção**.

---

# Estrutura do projeto

```
Semaforo_Balaca/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  └─ semaforo/
│  │  │     ├─ status/
│  │  │     │  └─ route.ts
│  │  │     └─ toggle/
│  │  │        └─ route.ts
│  │  ├─ semaforo/
│  │  │  ├─ page.tsx
│  │  │  └─ page.module.css
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ next.config.ts
└─ README.md
```

---

# Funcionamento

A interface principal está localizada em:

```
src/app/semaforo/page.tsx
```

Essa tela consome duas rotas internas do próprio Next.js:

```
GET  /api/semaforo/status
POST /api/semaforo/toggle
```

Essas rotas funcionam como **proxy para o backend principal**, evitando problemas de CORS.

Backend utilizado:

```
http://proserver.trielht.com.br:4005/prodconnect/api
```

Endpoints utilizados:

```
GET  /semaforo/status
POST /semaforo/toggle
```

---

# Requisitos

Antes de rodar o projeto, tenha instalado:

* Node.js 20+
* npm
* Git

---

# Como instalar o projeto

Clone o repositório:

```
git clone https://github.com/Pedro-Ril/Semaforo_Balaca.git
```

Entre na pasta do projeto:

```
cd Semaforo_Balaca
```

Instale as dependências:

```
npm install
```

---

# Executar em desenvolvimento

```
npm run dev
```

Depois abra no navegador:

```
http://localhost:3000
```

A tela do semáforo estará disponível em:

```
http://localhost:3000/semaforo
```

---

# Build para produção

Para gerar a versão otimizada do projeto:

```
npm run build
```

---

# Rodar em produção

Após gerar o build:

```
npm run start
```

Por padrão o servidor sobe na porta:

```
3000
```

Para alterar a porta:

```
npm run start -- -p 4010
```

---

# Deploy em servidor

Fluxo recomendado:

1. Instalar Node.js no servidor
2. Clonar o repositório
3. Instalar dependências
4. Gerar build
5. Rodar o servidor Next.js

Exemplo:

```
git clone https://github.com/Pedro-Ril/Semaforo_Balaca.git
cd Semaforo_Balaca
npm install
npm run build
npm run start
```

Para ambiente corporativo recomenda-se rodar com:

* PM2
* Docker
* Nginx como proxy reverso

---

# Fluxo de atualização do projeto

Para atualizar o código local com o repositório:

```
git pull origin main
```

Para enviar alterações para o GitHub:

```
git add .
git commit -m "Descrição da alteração"
git push origin main
```

---

# Autor

Pedro Henrique Ril
Equipe de TI
