# React Native Rules

## Expo

- Usar Expo como base do app.
- Usar Expo Router para navegacao baseada em arquivos.
- Evitar dependencias nativas quando houver alternativa Expo estavel.

## Componentes

- Separar componentes reutilizaveis em `src/components/`.
- Separar features por dominio em `src/features/`.
- Evitar logica pesada dentro de JSX.
- Tratar estados de loading, erro e vazio em toda tela com dados remotos.

## Mobile UX

- Priorizar toque confortavel, estados claros e performance em listas.
- Usar `FlatList` ou listas virtualizadas quando houver muitos itens.
- Respeitar safe areas.
- Evitar layouts que dependam de tamanho fixo de tela.
