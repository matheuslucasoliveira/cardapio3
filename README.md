# Cardápio React - Documentação

## Visão Geral
Este é um aplicativo de cardápio digital desenvolvido em React, com foco em performance e otimização de carregamento de imagens.

## Tecnologias Utilizadas
- React 18.2.0
- JavaScript
- HTML5
- CSS3

## Estrutura do Projeto
```
src/
├── components/
│   └── MenuItem.js      # Componente para exibição de cada item do cardápio
├── data.js              # Dados do cardápio e configurações de imagens
├── App.js              # Componente principal
└── styles.css          # Estilos da aplicação
```

## Componentes

### MenuItem.js
Componente responsável por renderizar cada item do cardápio.

#### Propriedades
- `item`: Objeto contendo as informações do item do cardápio
  - `id`: Identificador único
  - `nome`: Nome do item
  - `descricao`: Descrição detalhada
  - `preco`: Preço do item
  - `imagemUrl`: URL da imagem otimizada

#### Otimizações Implementadas
1. **Lazy Loading de Imagens**
   - Atributo `loading="lazy"` para carregar imagens apenas quando próximas da viewport
   - Reduz o carregamento inicial da página

2. **Prevenção de Layout Shift**
   - Dimensões fixas definidas (`width="300"` e `height="220"`)
   - `aspectRatio` mantido para consistência visual
   - Evita Cumulative Layout Shift (CLS)

3. **Acessibilidade**
   - Atributo `alt` para descrição das imagens
   - Melhora SEO e acessibilidade

### data.js
Arquivo contendo os dados do cardápio e configurações de otimização de imagens.

#### Otimizações de Imagens
1. **Parâmetros de URL**
   - `w=1000`: Largura máxima de 1000px
   - `q=80`: Qualidade de 80% (equilíbrio entre qualidade e tamanho)
   - `auto=format`: Formato automático otimizado pelo navegador
   - `fit=crop`: Mantém a proporção da imagem

## Performance
O projeto implementa várias técnicas de otimização:

1. **Carregamento de Imagens**
   - Lazy Loading nativo do HTML5
   - Imagens otimizadas via parâmetros de URL
   - Dimensões predefinidas para evitar layout shift

2. **Métricas de Performance**
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

## Como Executar
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. Acesse http://localhost:3000

## Análise de Performance
Para analisar a performance do aplicativo:

1. Abra o DevTools (F12)
2. Vá para a aba Network
3. Limpe o cache (Ctrl+Shift+R)
4. Observe o gráfico Waterfall
5. Use a aba Lighthouse para gerar relatório de performance

## Contribuição
Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Envie um pull request

## Licença
Este projeto está sob a licença MIT.
