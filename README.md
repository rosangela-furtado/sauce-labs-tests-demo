# sauce-labs-demo-tests
# 🌟 Testes Automatizados com Cypress 🌟

Bem-vindo ao repositório de testes automatizados! Este guia foi pensado para ser intuitivo e visualmente agradável enquanto te orienta sobre como configurar e rodar os testes. 🚀

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você possui os seguintes softwares instalados:

1. **Node.js** (12 ou superior) 🟢
2. **npm** (gerenciador de pacotes do Node.js) 📦

---

## 🔧 Instalação

1. Clone este repositório para sua máquina local:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install
   ```

---

## 🚦 Como Rodar os Testes

### 🖥️ Modo Interativo

1. Inicie o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```

2. Na interface que será aberta, escolha o navegador preferido.
3. Selecione o arquivo de teste desejado, por exemplo, `removerDoCarrinho.cy.js`. ✅

### ⚙️ Modo Headless

1. Execute todos os testes diretamente no terminal:
   ```bash
   npx cypress run
   ```

2. Para rodar um teste específico:
   ```bash
   npx cypress run --spec "cypress/e2e/removerDoCarrinho.cy.js"
   ```

---

## 🗂️ Estrutura de Arquivos

📂 **cypress/e2e/**  
Contém os arquivos de testes, como `removerDoCarrinho.cy.js`.

📂 **cypress/fixtures/**  
Inclui dados fictícios utilizados nos testes.

📂 **cypress/support/**  
Armazena configurações e comandos personalizados.

---

## 🚀 Relatórios de Testes com Allure

### Como Gerar o Relatório 🛠️:
1. Execute os testes no Cypress:
   ```bash
   npx cypress run --env allure=true

---

## 💡 Suporte

Dúvidas? Explore a [documentação oficial do Cypress](https://docs.cypress.io/). ✨

**Boa sorte e bons testes!** 🧪
