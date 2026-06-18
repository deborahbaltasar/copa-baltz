# Git Rules

## Trabalho em arvore possivelmente suja

- Nao reverter mudancas de outras pessoas.
- Ignorar mudancas nao relacionadas.
- Se um arquivo alterado por outra pessoa for necessario, ler com cuidado e trabalhar com o conteudo existente.

## Commits

- Commits devem ser pequenos e descrever o resultado.
- Nao misturar refactor amplo com feature.
- Nao incluir secrets, caches ou artefatos gerados desnecessarios.
- Ao finalizar cada fase, responder com uma sugestao de mensagem de commit em formato Conventional Commit.
- A sugestao deve incluir tipo e escopo, por exemplo: `feat(auth): implement phase 01 auth setup`.
- Quando houver mais de um escopo possivel, indicar o escopo recomendado e alternativas curtas.

## Historico

- Registrar decisoes relevantes em `.codex/memory/decisions.md`.
- Registrar alteracoes em `.codex/memory/changelog.md`.
