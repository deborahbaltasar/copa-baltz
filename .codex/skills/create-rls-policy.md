# Skill: Create RLS Policy

## Objetivo

Criar policies RLS seguras.

## Passos

1. Identificar dono do dado.
2. Definir operacoes permitidas por papel.
3. Usar `auth.uid()` para dados do usuario.
4. Evitar `true` em writes sem justificativa.
5. Testar leitura, insert, update e delete quando aplicavel.

## Criterios de aceite

- Usuario acessa apenas seus dados privados.
- Leitura publica existe apenas onde planejado.
- Policies sao registradas em memoria.
