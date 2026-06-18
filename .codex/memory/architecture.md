# Architecture Memory

## Arquitetura planejada

O app sera organizado em camadas:

- `src/lib/`: clientes e integracoes base, como Supabase.
- `src/services/`: chamadas ao Supabase e contratos de dados.
- `src/types/`: tipos compartilhados.
- `src/components/`: componentes reutilizaveis.
- `src/features/`: telas, hooks e componentes especificos por dominio.
- `src/store/`: estado global simples com Zustand.
- `src/utils/`: regras puras, formatadores e calculos de progresso.
- `src/constants/`: tokens de tema, espacamento, raio, paises, temas e regras de ilustracao.

## Principios

- Telas orquestram.
- Services acessam dados.
- Utils concentram regras puras.
- Tipos ficam centralizados.
- Design system orienta todos os elementos visuais.

## Multiplos albuns

O app deve ser construido para multiplos albuns desde o inicio. Nao deve existir suposicao de album unico fixo no codigo.

- `albums` e o catalogo de albuns disponiveis no app.
- Exemplos iniciais e futuros: Copa 2022, Copa 2026, Copa Feminina, Copa America e albuns personalizados.
- `stickers` pertence a um `album_id`.
- O usuario pode alternar entre albuns.
- Cada album tem sua propria lista de figurinhas, faltantes, repetidas e progresso.
- O progresso exibido deve sempre receber `albumId` ou derivar do album selecionado de forma explicita.

## Progresso por album

O progresso por album e calculado a partir das figurinhas daquele album:

1. Buscar figurinhas de `stickers` filtradas por `album_id`.
2. Relacionar com `user_stickers` do usuario autenticado.
3. Considerar como obtida toda figurinha com `quantity > 0`.
4. Calcular `obtidas / total_stickers` ou `obtidas / count(stickers)` quando apropriado.

Faltantes sao figurinhas do album com `quantity = 0` ou sem linha em `user_stickers`. Repetidas sao figurinhas do album com `quantity > 1`.

## Tema por pais

O perfil do usuario deve armazenar o pais/selecao favorita:

- `selected_country_code`
- `selected_country_name`
- `selected_country_flag`

A camada de constantes planejada deve incluir:

- `src/constants/countries.ts`: lista de paises com `country_code`, `country_name` e `flag_emoji`.
- `src/constants/themes.ts`: tokens por pais e funcao `getCountryTheme(countryCode: string)` retornando o tema do pais ou o tema padrao neutro.
- `src/constants/illustrations.ts`: variacoes do mascote, elementos decorativos por pais e regras de uso dos elementos visuais.

O tema por pais deve ser tratado como acento visual, nao como troca completa de identidade. A estetica base continua clean, premium e inspirada em iOS.

Atualizacao do contrato de constantes:

- `countries.ts` guarda dados de identificacao: `country_code`, `country_name` e `flag_emoji`.
- `themes.ts` guarda tokens visuais: `primary`, `secondary`, `accent`, `success`, `warning`, `background`, `cardBackground`, `border`, `textPrimary` e `textSecondary`.
- `illustrations.ts` guarda metadados de assets e regras de uso, sem depender de marcas oficiais.

O layout nao deve mudar drasticamente por pais. A arquitetura visual deve manter a regra 80/20: componentes, navegacao e hierarquia estaveis; acentos, ornamentos e ilustracoes variaveis.

## Implementado na Fase 01

- `app/`: rotas Expo Router para auth, home e perfil.
- `src/lib/supabase.ts`: client Supabase com AsyncStorage.
- `src/services/auth.ts`: login, cadastro, logout e sessao.
- `src/services/profiles.ts`: leitura/upsert de perfil e atualizacao de pais favorito.
- `src/store/authStore.ts`: sessao, perfil, inicializacao e acoes de auth.
- `src/constants/countries.ts`: lista inicial de paises.
- `src/constants/themes.ts`: tema neutro e temas por pais.
- `src/constants/illustrations.ts`: metadados iniciais de mascote/ornamentos.
- `src/components/`: componentes iniciais reutilizaveis.

## Status

Arquitetura base implementada para auth e perfil. Banco, albuns, figurinhas e listas ainda aguardam fases futuras.
