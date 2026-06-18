# Design System Memory

## Direcao

Clean, minimalista, premium e inspirado em Apple/iOS. O app deve parecer leve, organizado e moderno, sem visual infantil.

As referencias enviadas devem orientar grid de figurinhas, hierarquia, uso de cards, leveza visual, navegacao simples e sensacao amigavel. Nao copiar layout, textos, marca, mascote ou composicao visual. O resultado final deve ser autoral, mais clean e mais sofisticado.

## Principios visuais

- Interface muito limpa.
- Estilo iOS/Apple.
- Visual leve, moderno e premium.
- Poucas cores por tela.
- Muito espaco em branco.
- Cards arredondados.
- Tipografia clara.
- Hierarquia visual forte.
- Navegacao simples.
- Elementos ilustrativos suaves.
- Visual divertido, mas nao infantil.
- Aparencia sofisticada, nao generica.

## Regra 80/20 por pais

- 80% da experiencia deve permanecer consistente entre todos os paises.
- Ate 20% pode variar para refletir o pais escolhido.
- A estrutura, navegacao, layout base, grid, componentes e hierarquia nao devem mudar drasticamente.
- O que varia: tema visual, acentos, pequenos ornamentos, detalhes de ilustracao e mascote auxiliar.
- O app deve parecer um unico produto bem desenhado, nao varios apps diferentes.

## Fundacao visual inicial

- Fundo: quase branco.
- Superficies: branco ou cinza muito claro.
- Texto principal: escuro e com alto contraste.
- Texto secundario: cinza medio.
- Destaque: uma cor principal discreta, ainda a definir na implementacao.
- Sucesso/status positivo: verde discreto.
- Aviso/repetida: azul ou amarelo muito suave, a definir com cuidado.
- Faltando: cinza discreto.

## Paleta padrao neutra

- Background: quase branco.
- Surface: branco.
- Surface muted: cinza muito claro.
- Text primary: quase preto.
- Text secondary: cinza medio.
- Border/subtle separator: cinza claro.
- Primary default: azul iOS discreto.
- Accent default: cinza azulado suave.

## Tema por pais

O app deve permitir temas por pais/selecao favorita escolhida no perfil, mantendo a estetica principal clean, premium e inspirada em iOS.

As cores do pais sao acentos visuais, nao fundos pesados. Usar cores de bandeira com moderacao em:

- Cor primaria.
- Cor secundaria.
- Cor de destaque.
- Badges.
- Botoes principais.
- Barra de progresso.
- Icones selecionados.
- Pequenos detalhes visuais.
- Pequenos ornamentos graficos.
- Ilustracoes auxiliares.
- Headers, empty states e secoes de album com muita contencao.

Nao usar logos oficiais, marcas da FIFA, emblemas de selecoes ou elementos protegidos por copyright.

## Como aplicar cores de bandeira sem poluir

- Manter fundos principais em branco ou quase branco.
- Usar a cor primaria em acoes e estados selecionados.
- Usar a cor secundaria em backgrounds muito suaves de badges/chips.
- Usar a cor de acento em detalhes pequenos, nunca em blocos grandes.
- Evitar combinacoes de alto contraste em areas extensas.
- Preferir opacidade baixa, tons suavizados e contraste legivel.
- Garantir que cada tema continue parecendo parte do mesmo app.
- Evitar que as cores da bandeira dominem a tela.
- Nao aplicar cores saturadas em grandes superficies.
- Usar o tema para orientar selecao, status e foco, nao para decorar tudo.

## Exemplos de temas por pais

- Brasil: verde, amarelo, azul e branco de forma discreta e elegante.
- Argentina: azul claro, branco e detalhes dourados.
- Mexico: verde, branco e vermelho com elementos calorosos, simplificados e limpos.
- Franca: azul, branco e vermelho com vermelho usado com muita moderacao.
- Japao: branco, vermelho e cinzas suaves, com minimalismo ainda mais forte.
- Portugal: verde, vermelho e detalhes dourados.
- Alemanha: preto, vermelho, amarelo e branco, com preto como texto/detalhe e amarelo suavizado.
- Espanha: vermelho, amarelo e detalhes escuros, evitando saturacao pesada.

## Sistema de tema planejado

- `src/constants/countries.ts` deve conter `country_code`, `country_name` e `flag_emoji`.
- `src/constants/themes.ts` deve expor `getCountryTheme(countryCode: string)`.
- `src/constants/themes.ts` deve conter tokens por pais: `primary`, `secondary`, `accent`, `success`, `warning`, `background`, `cardBackground`, `border`, `textPrimary` e `textSecondary`.
- `src/constants/illustrations.ts` deve documentar variacoes do mascote, elementos decorativos por pais e regras de uso visual.
- `getCountryTheme` deve retornar o tema do pais escolhido ou o tema padrao neutro quando nao houver pais selecionado.

Status Fase 01: arquivos de constantes foram criados com tema neutro e temas iniciais para Brasil, Argentina, Mexico, Franca, Japao, Portugal, Alemanha e Espanha.

## Ilustracoes e mascote

O app pode ter um mascote/character auxiliar e elementos ilustrativos leves. Eles devem apoiar a experiencia, nao ocupar o papel principal da interface.

Regras:

- Seguir sempre a mesma familia visual.
- Manter traco, proporcao, acabamento e nivel de detalhe consistentes.
- Variar roupa, paleta, acessorios e pequenos detalhes conforme o pais.
- Usar adesivos decorativos, icones tematicos, molduras sutis, padroes suaves e formas organicas apenas como apoio.
- Evitar excesso de ilustracao em telas utilitarias.
- Nunca usar mascote, uniforme, emblema ou marca oficial protegida.
- Preferir ilustracoes em headers, cards de destaque, empty states e pequenos avatares.

Exemplos:

- Brasil: sensacao ensolarada, alegre e leve; ornamentos com curvas suaves.
- Argentina: sensacao fresca e arejada; detalhes delicados.
- Mexico: elementos calorosos e festivos simplificados.
- Franca: sensacao elegante e sobria; ornamentos discretos.
- Japao: minimalismo mais forte; detalhes muito contidos.
- Portugal: sensacao classica, acolhedora e elegante.

## Espacamento

- Usar espacamento generoso.
- Preferir ritmo consistente: 4, 8, 12, 16, 20, 24, 32.
- Evitar telas densas demais.

## Radius e sombras

- Cards com radius alto, entre 16 e 24.
- Botoes com radius confortavel.
- Sombras leves e sutis.
- Evitar bordas pesadas.

## Componentes planejados

- `AlbumCard`: card amplo com capa, nome, descricao curta e progresso.
- `StickerCard`: card pequeno com numero, nome, status e quantidade.
- `ProgressBar`: barra limpa, baixa e discreta.
- `StatusBadge`: badge pequeno e sem excesso de cor.
- `EmptyState`, `LoadingState`, `ErrorState`: estados simples e elegantes.

## Padroes por tela

### Home

- Header simples com saudacao.
- Lista ou destaque de albuns disponiveis/selecionados.
- Card principal do album selecionado ou album em andamento.
- Progresso discreto.
- Atalhos para faltantes e repetidas.
- Card principal pode usar acento visual do pais e ilustracao/mascote coerente com o tema selecionado.

### Perfil

- Exibir email.
- Permitir escolher ou alterar pais/selecao favorita.
- Exibir bandeira escolhida.
- Mostrar preview do tema.
- Acao de logout discreta e clara.
- Alteracao de pais deve refletir o tema visual do app.

### Album

- Header com progresso.
- Header pode usar acento do pais sem fundo pesado.
- Busca limpa.
- Filtros em chips arredondados.
- Grid bem espacado.
- Cards de figurinhas podem ter detalhes sutis do pais.
- Placeholders podem usar borda suave tematizada.
- Ilustracao de apoio pode aparecer no topo da secao quando nao prejudicar leitura.

### Detalhe da figurinha

- Card central com numero/arte.
- Controles de quantidade simples.
- Status calculado automaticamente.

### Listas

- Layout limpo.
- Texto facil de copiar.
- Acao de compartilhar clara.
- Usar cor do pais apenas em acentos de status e acoes.

## Componentes tematizados

- `AlbumCard`: acento lateral, progress bar e detalhe ilustrativo seguindo o pais.
- `StickerCard`: borda, status badge ou check selecionado com cor primaria.
- `ProgressBar`: preenchimento com `theme.primary`.
- `StatusBadge`: background suave com `theme.secondary` ou cores semanticas.
- `PrimaryButton`: fundo com `theme.primary`, texto com contraste verificado.
- `TabBar`: icones selecionados com `theme.primary`, fundo neutro.
- `EmptyState`: ilustracao auxiliar pequena e texto objetivo.

## Referencias

Inspiracao estetica: Apple Wallet, Apple Fitness, App Store, iOS Settings e iOS Photos. Usar apenas como direcao de qualidade, nao como copia.
