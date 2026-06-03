# Speed Garage — React.JS

Site de revenda de veículos desenvolvido em **React.JS** com **Vite**, migrando o projeto original de HTML5/CSS3 para uma aplicação SPA (Single Page Application) com CRUD completo de veículos.

## Funcionalidades

- **Início (`/`)**: Veículos em destaque e últimas notícias do setor automotivo.
- **Pátio (`/patio`)**: Listagem completa de todos os veículos disponíveis.
- **Garagem (`/garagem`)**: Carrinho de veículos selecionados com total calculado.
- **Fale Conosco (`/contato`)**: Formulário de contato controlado via React state.
- **Administração (`/admin`)**: CRUD completo — cadastrar, listar, editar e excluir veículos.

## Tecnologias Utilizadas

- **React.JS 18** — Biblioteca de interfaces de usuário
- **Vite** — Bundler e servidor de desenvolvimento
- **React Router DOM v6** — Roteamento entre páginas (SPA)
- **CSS3** — Estilização original preservada (Flexbox + Media Queries)
- **Context API + useState** — Gerenciamento de estado global

## Como Executar

```bash
# 1. Acesse a pasta do projeto React
cd revenda-carros-react

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em: `http://localhost:5173`

## Estrutura do Projeto

```
revenda-carros-react/
├── public/
│   └── img/                     # Imagens dos veículos e logo
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho com logo
│   │   ├── Navbar.jsx           # Menu de navegação
│   │   ├── Footer.jsx           # Rodapé
│   │   └── VeiculoCard.jsx      # Card reutilizável de veículo
│   ├── context/
│   │   └── GaragemContext.jsx   # Estado global (CRUD + Garagem)
│   ├── data/
│   │   └── veiculos.js          # Dados iniciais dos veículos
│   ├── pages/
│   │   ├── Inicio.jsx           # Página inicial
│   │   ├── Patio.jsx            # Listagem de veículos
│   │   ├── Garagem.jsx          # Carrinho de veículos
│   │   ├── Contato.jsx          # Formulário de contato
│   │   └── AdminCrud.jsx        # CRUD de administração
│   ├── App.jsx                  # Roteamento principal
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
├── index.html
├── package.json
└── vite.config.js
```

## CRUD de Veículos

A página de administração (`/admin`) permite:

| Operação | Descrição |
|---|---|
| **Criar** | Formulário para cadastrar novo veículo com nome, descrição, preço e imagem |
| **Ler** | Tabela com todos os veículos cadastrados |
| **Editar** | Botão "Editar" preenche o formulário com os dados do veículo para atualização |
| **Excluir** | Botão "Excluir" remove o veículo com confirmação |

## Responsividade

O site é totalmente responsivo, adaptando-se a dispositivos móveis (até 480px), tablets (até 768px) e desktops.

## Licença

Este projeto é de uso educacional e não possui licença específica.

## Link do projeto original (HTML/CSS)

https://ribneves.github.io/Trabalho-Faculdade/
