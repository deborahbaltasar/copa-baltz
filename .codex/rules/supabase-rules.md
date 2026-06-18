# Supabase Rules

## Seguranca

- Nunca commitar URL secreta, service role key ou qualquer segredo.
- Usar variaveis de ambiente para Supabase URL e anon key.
- Usar service role somente fora do app cliente e nunca no mobile.

## Organizacao

- Toda chamada ao Supabase deve ficar em `src/services/` ou camada equivalente.
- O client deve ficar em `src/lib/supabase.ts`.
- Tipos de banco devem ficar em `src/types/database.ts`.

## RLS

- Habilitar RLS em tabelas com dados de usuario.
- `user_stickers` deve ser privado por usuario.
- `albums` e `stickers` podem ser publicos para leitura.
- Policies devem ser especificas e testaveis.
- Evitar policies abertas acidentalmente.

## Banco

- Criar indexes em foreign keys e colunas consultadas com frequencia.
- Criar migrations versionadas.
- Criar seed separado para dados iniciais.
