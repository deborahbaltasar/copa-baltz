# Project Brief

## Produto

Copa Baltz e um aplicativo mobile de albuns de figurinhas da Copa para usuarios acompanharem colecoes, progresso, faltantes e repetidas em multiplos albuns.

## Objetivo principal

Permitir que cada usuario gerencie um ou mais albuns de figurinhas com uma experiencia limpa, rapida e premium, inspirada em apps iOS bem acabados.

## Stack planejada

- React Native
- Expo
- TypeScript
- Expo Router
- Supabase Auth
- Supabase Database
- Supabase Storage
- Zustand para estado global simples
- React Hook Form quando formularios justificarem
- ESLint e Prettier
- Testes basicos quando fizer sentido

## Funcionalidades principais

- Login e cadastro
- Ver albuns disponiveis
- Escolher ou adicionar albuns a conta
- Abrir um album
- Ver figurinhas por numero
- Buscar figurinha por numero
- Filtrar por status
- Marcar figurinhas como faltando, tenho ou repetida por quantidade
- Controlar quantidade de cada figurinha
- Calcular progresso do album
- Alternar entre albuns
- Ver lista de faltantes
- Ver lista de repetidas
- Compartilhar listas
- Escolher pais/selecao favorita no perfil
- Aplicar tema visual discreto conforme pais escolhido

## Modelo de produto

- O app nao deve ser limitado a um unico album fixo.
- `albums` representa os albuns disponiveis no app, como Copa 2022, Copa 2026, Copa Feminina e futuramente Copa America.
- Cada album tem suas proprias figurinhas.
- Cada usuario pode acompanhar progresso separado por album.
- Faltantes e repetidas sao sempre calculadas dentro do album atual.
- O usuario deve conseguir alternar entre albuns.

## Regras de status

- `quantity = 0`: faltando
- `quantity = 1`: tenho
- `quantity > 1`: repetida

## Direcao visual

Visual clean, minimalista, premium e inspirado em Apple/iOS. A interface deve ser clara, elegante, com muito espaco em branco, cards arredondados, sombras leves, tipografia legivel, badges discretas e foco em usabilidade.

O app tera um tema padrao neutro e podera aplicar acentos visuais por pais escolhido no perfil. As cores devem ser inspiradas em bandeiras, mas usadas com moderacao em botoes principais, badges, barras de progresso, icones selecionados, pequenos detalhes e ilustracoes auxiliares. Nao usar logos oficiais, marcas da FIFA, emblemas de selecoes ou elementos protegidos por copyright.

A referencia visual enviada deve orientar grid de figurinhas, hierarquia, leveza, cards arredondados e sensacao amigavel. O resultado final deve ser autoral, mais clean e mais sofisticado, sem copiar a interface de referencia.

Regra visual de produto: 80% da experiencia permanece consistente entre paises e ate 20% varia para refletir o pais escolhido. O app deve parecer um unico produto bem desenhado, nao varios apps diferentes.

## Fora do escopo inicial

- Album compartilhado
- Ranking
- Sistema de trocas entre usuarios
- Leitura por camera
- Implementacao nativa avancada
