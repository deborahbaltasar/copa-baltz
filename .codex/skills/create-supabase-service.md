# Skill: Create Supabase Service

## Objetivo

Criar service para acesso ao Supabase.

## Passos

1. Confirmar contrato de dados e tipos.
2. Usar client central de `src/lib/supabase.ts`.
3. Encapsular queries e mutations.
4. Retornar dados ou erros de forma previsivel.
5. Evitar regra de UI no service.
6. Adicionar testes quando fizer sentido.

## Criterios de aceite

- Nenhuma chamada Supabase fora da camada apropriada.
- Tipos compartilhados usados corretamente.
- Erros tratados sem expor dados sensiveis.
