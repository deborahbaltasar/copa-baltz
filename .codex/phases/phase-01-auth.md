# Phase 01 - Setup Expo + Auth

## Objetivo

Criar a base do aplicativo Expo com autenticacao Supabase.

## Escopo

- Criar projeto Expo com TypeScript.
- Configurar Expo Router.
- Configurar ESLint/Prettier se ainda nao existirem.
- Criar `src/lib/supabase.ts`.
- Criar `src/constants/countries.ts`.
- Criar `src/constants/themes.ts` com `getCountryTheme(countryCode: string)`.
- Criar `src/constants/illustrations.ts` com metadados e regras iniciais de elementos visuais por pais.
- Configurar variaveis de ambiente para Supabase.
- Criar login, cadastro, logout e persistencia de sessao.
- Criar base de perfil com email e selecao de pais favorito.
- Criar store simples de auth com Zustand se necessario.

## Validacao

- App inicia localmente.
- Typecheck passa.
- Lint passa, se configurado.
- Fluxos de login/cadastro sao testados manualmente ou com testes quando possivel.
- Tema padrao neutro funciona quando usuario nao escolheu pais.
- Troca de pais altera somente acentos visuais planejados, sem mudar layout base.

## Pendencias esperadas

- Banco e RLS completos ficam para Fase 02.

## Status

Concluida em 2026-06-18.

## Validacoes executadas

- `npm run typecheck`
- `npm run lint`
- Expo Metro iniciado em `http://localhost:8081`

## Pendencias reais

- Configurar `.env` com URL e anon key do Supabase.
- Criar banco, migrations e RLS na Fase 02.
