# Database Memory

## Banco planejado

Supabase/Postgres.

## Tabelas iniciais

### profiles

- `id uuid primary key references auth.users`
- `email text`
- `display_name text`
- `selected_country_code text`
- `selected_country_name text`
- `selected_country_flag text`
- `created_at timestamp`
- `updated_at timestamp`

### albums

- `id uuid primary key`
- `name text`
- `description text`
- `cover_image_url text`
- `total_stickers integer`
- `created_at timestamp`

### stickers

- `id uuid primary key`
- `album_id uuid references albums`
- `number integer`
- `name text`
- `image_url text`
- `created_at timestamp`

### user_stickers

- `id uuid primary key`
- `user_id uuid references auth.users`
- `sticker_id uuid references stickers`
- `quantity integer default 0`
- `created_at timestamp`
- `updated_at timestamp`

## RLS planejado

- `albums`: leitura publica.
- `stickers`: leitura publica.
- `user_stickers`: privado por usuario.
- `profiles`: privado por usuario, salvo campos publicos futuros explicitamente definidos.

## Relacoes

- `albums` representa cada album disponivel no app.
- `stickers.album_id` conecta cada figurinha ao seu album.
- `user_stickers.sticker_id` conecta o progresso do usuario a uma figurinha especifica.
- Como cada figurinha pertence a um album, o progresso por album e calculado filtrando as figurinhas por `album_id` e cruzando com `user_stickers` do usuario.

## Progresso por album

Para um usuario e album:

- Total do album: `albums.total_stickers` ou `count(stickers where album_id = :albumId)`.
- Obtidas: count de figurinhas do album com `user_stickers.quantity > 0`.
- Faltantes: figurinhas do album sem registro em `user_stickers` ou com `quantity = 0`.
- Repetidas: figurinhas do album com `quantity > 1`.

O codigo nao deve guardar progresso agregado sem necessidade inicial. Preferir calculo via query/service ate existir motivo claro para cache ou materializacao.

## Perfil e tema

Campos de pais no `profiles` controlam o tema visual:

- `selected_country_code`: codigo estavel usado por `getCountryTheme`.
- `selected_country_name`: nome exibivel do pais/selecao.
- `selected_country_flag`: emoji de bandeira exibivel.

Ao alterar pais no perfil, atualizar os tres campos e `updated_at`.

## Seed planejado

- Album `Copa 2026`.
- 100 figurinhas numeradas de 1 a 100.

Seeds futuros podem incluir Copa 2022, Copa Feminina e outros albuns publicos.

## Status

Nenhuma migration criada na Fase 00.
