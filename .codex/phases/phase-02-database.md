# Phase 02 - Database

## Objetivo

Criar schema Supabase/Postgres inicial, RLS, policies e seed.

## Escopo

- Criar migrations para `profiles`, `albums`, `stickers` e `user_stickers`.
- Incluir em `profiles`: `display_name`, `selected_country_code`, `selected_country_name`, `selected_country_flag` e `updated_at`.
- Criar indexes em foreign keys.
- Habilitar RLS.
- Criar policies seguras.
- Criar seed `Copa 2026` com 100 figurinhas.
- Criar ou atualizar tipos principais.

## Validacao

- SQL executa sem erro.
- Policies restringem dados privados.
- Albuns e figurinhas podem ser lidos conforme esperado.
- Campos de perfil podem ser atualizados apenas pelo proprio usuario.
- Seed cria dados esperados.
