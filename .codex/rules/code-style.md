# Code Style Rules

## TypeScript

- Usar TypeScript estrito sempre que possivel.
- Evitar `any`; preferir tipos explicitos, generics ou `unknown` com narrowing.
- Centralizar tipos compartilhados em `src/types/`.
- Nomear funcoes e variaveis de forma descritiva.

## Organizacao

- Telas devem orquestrar componentes e hooks, nao concentrar regra complexa.
- Regras de negocio devem ficar em services, utils ou hooks dedicados.
- Componentes devem ser pequenos, reutilizaveis e previsiveis.
- Chamadas externas devem ficar em services.

## Estilo

- Preferir codigo simples a abstracoes prematuras.
- Comentarios so quando explicarem uma decisao ou fluxo nao obvio.
- Manter imports organizados e remover codigo morto.
- Seguir ESLint e Prettier do projeto quando configurados.
