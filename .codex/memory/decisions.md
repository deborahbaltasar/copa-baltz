# Decisions

## 2026-06-18

- Criada a base `.codex/` como memoria local do projeto antes de qualquer implementacao do app.
- Fase 00 limitada a documentacao e organizacao; nenhuma dependencia ou tela sera criada nesta fase.
- Conteudo inicial escrito em portugues sem acentos para evitar inconsistencias de encoding no ambiente atual.
- Produto definido como multi-album: o app nao sera limitado a um album fixo e todo progresso deve ser calculado por album.
- Tema visual por pais sera suportado via perfil do usuario e constantes locais, usando cores de bandeira apenas como acentos discretos.
- Nao usar logos oficiais, marcas FIFA, emblemas de selecoes ou elementos protegidos por copyright.
- Direcao visual refinada: referencias servem para hierarquia, grid, cards e leveza, mas o produto final deve ser autoral, mais clean e mais sofisticado.
- Adotada regra 80/20 para tema por pais: 80% consistente, 20% variavel em acentos, ornamentos e ilustracoes.
- `countries.ts` sera limitado a identificacao do pais; tokens visuais ficam em `themes.ts`; regras e variacoes ilustrativas ficam em `illustrations.ts`.
- Fase 01 usa Expo SDK 56 com Expo Router e TypeScript.
- Supabase Auth fica isolado em `src/services/auth.ts`; perfil fica em `src/services/profiles.ts`.
- Estado global simples fica em Zustand em `src/store/authStore.ts`.
- O client Supabase usa `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY`; sem essas variaveis, o app sobe e auth retorna mensagem de configuracao.
- ESLint foi fixado na linha 9 porque ESLint 10 apresentou incompatibilidade com o plugin React usado pelo `eslint-config-expo`.
- O scaffold criou metadata Git automaticamente; como o projeto nao tinha Git antes, a pasta `.git` gerada foi removida.
