# 🐾 Dogs - Social Network for Dogs (Vue 3 Edition)

![](./src/assets/screenshots/tela%20inicial.png)

Esta é uma releitura completa da rede social "Dogs", originalmente desenvolvida em React pela Origamid, agora reconstruída utilizando Vue 3 e funcionalidades avançadas de UX/UI.

## 🔗 Links Úteis

- **Deploy (Vercel):** [https://dogs-one-mu.vercel.app/](https://dogs-one-mu.vercel.app/)
- **Código Fonte:** [https://github.com/wan0805/dogs](https://github.com/wan0805/dogs)

## 📌 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades e Diferenciais](#-funcionalidades-e-diferenciais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Melhorias Implementadas](#-melhorias-implementadas)
- [Licença](#-licença)

## 📝 Sobre o Projeto

O projeto consiste em uma rede social voltada para cães, permitindo o cadastro de usuários, postagem de fotos, visualização de feed dinâmico, comentários e análise de métricas de engajamento. A migração para o ecossistema Vue teve como foco explorar a Composition API e a reatividade do Vue 3.

## ✨ Funcionalidades e Diferenciais

- **Autenticação Completa:** Login, cadastro e recuperação de senha.
- **Feed Infinito:** Carregamento inteligente de fotos dos pets.
- **Perfil do Usuário:** Área exclusiva para gerenciar postagens e visualizar métricas.
- **Interatividade:** Postagem de fotos e sistema de comentários em tempo real.

## 🛠️ Tecnologias Utilizadas

- **Core:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **State Management:** Pinia
- **Charts:** Vue ApexCharts
- **Feedback:** Custom Toast System
- **Security:** Dotenv (Vite Environment Variables)
- **Styles:** CSS Scoped

## 📦 Instalação e Configuração

### Clone o repositório:

```sh
git clone [https://github.com/seu-usuario/dogs-vue.git](https://github.com/seu-usuario/dogs-vue.git)
cd dogs-vue
```

### Instale as dependências:

```sh
npm install
cd npm install
```

### Inicie o servidor de desenvolvimento:

```sh
npm run dev
cd run dev
```

### 🔐 Variáveis de Ambiente

Para o funcionamento correto das chamadas à API, crie um arquivo .env na raiz do projeto (não utilize aspas nos valores):

#### Snippet de código

```sh
VITE_API_URL=https://dogsapi.origamid.dev/json
cd VITE_API_URL=https://dogsapi.origamid.dev/json
```

### 🚀 Melhorias Implementadas

#### 🌓 Modo Escuro e Claro

Implementado através de variáveis de CSS raiz e persistência no localStorage. O tema se adapta automaticamente à preferência do sistema operacional, mas permite a troca manual.

#### 📊 Gráficos com ApexCharts

Utilizado na página de estatísticas (dentro da rota /conta) para renderizar o volume de acessos e engajamento das fotos de forma visual e moderna.

#### 🍞 Sistema de Toasts

Um sistema de notificações leve e reativo que informa ao usuário sobre o sucesso de uploads, erros de login ou alertas do sistema, substituindo os alertas padrão do navegador.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais. O design e a API original são de propriedade da Origamid.

## 🤝 Agradecimentos

Um agradecimento especial à **Origamid** e ao professor **André Rafael**, criadores do projeto original e da API utilizada. Este projeto foi fundamental para consolidar meus conhecimentos em arquitetura de componentes e reatividade, permitindo a exploração do ecossistema Vue 3.

---

<p align="center">
  Desenvolvido com ☕ e 💚 por [Wanderson Duarte]
</p>
