# TipsKeeper – Aplicação de Gerenciamento de Notas

Aplicação front-end desenvolvida em React para criação e gerenciamento de notas simples do dia a dia.

O projeto foi desenvolvido como parte do curso **Full-Stack Turbo da TipsCode**, com o objetivo de praticar conceitos fundamentais do React, incluindo componentização, gerenciamento de estado com `useState` e manipulação dinâmica da interface.

## Visão Geral

O TipsKeeper permite que o usuário crie, visualize e exclua notas diretamente na interface da aplicação.

Cada nota possui um título e uma descrição. As notas são renderizadas dinamicamente e a interface é atualizada em tempo real conforme o usuário interage com o sistema.

Os dados são armazenados apenas em memória utilizando o estado do React (`useState`). Portanto, ao recarregar a página, todas as notas são perdidas.

O foco principal do projeto é demonstrar:

- Componentização em React
- Gerenciamento de estado com `useState`
- Implementação de operações básicas de CRUD no front-end
- Manipulação dinâmica da interface
- Comunicação entre componentes via props

## Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- Vite
- CSS3
- Material UI (MUI)

Bibliotecas utilizadas:

- `@mui/material`
- `@mui/icons-material`

## Funcionalidades

- Criação de notas com título e descrição
- Exibição dinâmica das notas criadas
- Exclusão de notas individualmente
- Atualização da interface em tempo real utilizando React
- Interface simples e responsiva

## Como Executar Localmente

1. Clone o repositório:

```
git clone https://github.com/mateushahndev/tipskeeper-gerenciamento-de-notas.git
```

2. Acesse a pasta do projeto:

```
cd tipskeeper-gerenciamento-de-notas
```

3. Instale as dependências:

```
npm install
```

4. Execute o projeto:

```
npm run dev
```

5. Abra no navegador:

```
http://localhost:5173
```

## Possíveis Melhorias

Algumas evoluções possíveis para o projeto incluem:

- Persistência de dados utilizando `localStorage`
- Integração com backend para armazenamento permanente das notas
- Edição de notas existentes
- Implementação de categorias ou tags
- Melhorias de UI/UX



Projeto desenvolvido para fins educacionais durante estudos de React.
