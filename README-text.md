# 🐾 Dogs - Social Network for Dogs (Vue 3 Edition)

![](./src/assets/screenshots/tela%20inicial.png)

Esta é uma releitura completa da rede social "Dogs", originalmente desenvolvida em React pela Origamid, agora reconstruída utilizando Vue 3 e funcionalidades avançadas de UX/UI.

## 📌 Índice

Sobre o Projeto

Funcionalidades e Diferenciais

Tecnologias Utilizadas

Instalação e Configuração

Variáveis de Ambiente

Scripts Disponíveis

Melhorias Implementadas

Licença

## 📝 Sobre o Projeto

O projeto consiste em uma rede social voltada para cães, permitindo o cadastro de usuários, postagem de fotos, visualização de feed dinâmico, comentários e análise de métricas de engajamento. A migração para o ecossistema Vue teve como foco explorar a Composition API e a reatividade do Vue 3.

## ✨ Funcionalidades e Diferenciais

Autenticação Completa: Login, cadastro e recuperação de senha.

Feed Infinito: Carregamento inteligente de fotos dos pets.

Perfil do Usuário: Área exclusiva para gerenciar postagens e visualizar métricas.

Interatividade: Postagem de fotos e sistema de comentários em tempo real.

## 🛠️ Tecnologias Utilizadas

Core: Vue 3 (Composition API)

Build Tool: Vite

State Management: Pinia

Charts: Vue ApexCharts

Feedback: Custom Toast System

Security: Dotenv (Vite Environment Variables)

Styles: CSS Scoped

## 📦 Instalação e Configuração

### Clone o repositório:

```sh
git clone https://github.com/seu-usuario/dogs-vue.git
cd dogs-vue
```

### Instale as dependências:

```sh
npm install
```

### Inicie o servidor de desenvolvimento:


```sh
npm run dev
```

## 🔐 Variáveis de Ambiente

Para o funcionamento correto das chamadas à API, crie um arquivo .env na raiz do projeto:

Snippet de código

# URL base da API Origamid

VITE_API_URL=https://dogsapi.origamid.dev/json

## 🚀 Melhorias Implementadas

Abaixo, os detalhes técnicos das melhorias adicionadas nesta versão:

🌓 Modo Escuro e Claro
Implementado através de variáveis de CSS raiz e persistência no localStorage. O tema se adapta automaticamente à preferência do sistema operacional, mas permite a troca manual.

📊 Gráficos com ApexCharts
Utilizado na página de estatísticas (dentro da rota /conta) para renderizar o volume de acessos e engajamento das fotos de forma visual e moderna.

🍞 Sistema de Toasts
Um sistema de notificações leve e reativo que informa ao usuário sobre o sucesso de uploads, erros de login ou alertas do sistema, substituindo os alertas padrão do navegador.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais. O design e a API original são de propriedade da Origamid.
