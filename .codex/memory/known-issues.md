# Known Issues

## Atuais

- Variaveis reais do Supabase ainda nao foram configuradas. Login/cadastro so funcionarao contra o backend quando `.env` tiver `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY`.
- Banco, migrations, RLS e tabela `profiles` ainda nao existem no projeto; isso e escopo da Fase 02.
- `npm install` reportou 10 vulnerabilidades moderadas em dependencias transitivas do scaffold Expo. Nao foi executado `npm audit fix` para evitar upgrades fora do SDK.
- Instalacao exigiu `--legacy-peer-deps` apos conflito transitivo entre Expo Router, React e React DOM; typecheck e lint passam.

## Observacoes

- O texto anexado original apareceu com problemas de encoding no terminal, mas o conteudo foi interpretado e a documentacao inicial foi escrita sem acentos para reduzir risco de encoding.
