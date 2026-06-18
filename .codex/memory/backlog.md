# Backlog

## Fase 01 - Setup Expo + Auth

- Concluida em 2026-06-18.
- Pendente para uso real: preencher `.env` com URL e anon key do Supabase.

## Fase 02 - Database

- Criar migrations.
- Criar RLS.
- Criar policies.
- Criar campos adicionais em `profiles`.
- Criar seed Copa 2026.
- Gerar ou escrever tipos principais.
- Validar que profile upsert funciona com as policies.

## Fase 03 - Albums

- Listar albuns disponiveis.
- Permitir alternar entre albuns.
- Calcular progresso separado por album.
- Garantir que faltantes e repetidas sempre sejam filtradas por album.

## Perfil e tema

- Criar tela/secao de perfil.
- Exibir email do usuario.
- Permitir escolher pais/selecao favorita.
- Atualizar campos `selected_country_*` em `profiles`.
- Aplicar `getCountryTheme` no app.
- Mostrar preview do tema no perfil.
- Aplicar acentos do pais em CTAs, progress bars, chips, tags, botoes selecionados, avatares e detalhes ilustrativos.
- Garantir regra 80/20 de consistencia visual entre paises.

## Sistema visual

- Definir tema padrao neutro.
- Definir tokens iniciais para Brasil, Argentina, Mexico, Franca, Japao, Portugal, Alemanha e Espanha.
- Definir regras de uso de mascote/ilustracoes por pais.
- Criar ou integrar assets ilustrativos autorais sem marcas oficiais.
- Validar contraste dos CTAs e badges por tema.

## Futuro

- Album compartilhado.
- Ranking.
- Trocas entre usuarios.
- Leitura por camera.
- Permitir usuario criar album personalizado.
- Permitir importar lista oficial de figurinhas.
- Permitir trocar figurinhas com usuarios do mesmo pais ou cidade.
