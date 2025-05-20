# Guia de Implantação no GitHub

Este guia fornece instruções detalhadas para implementar as otimizações de code splitting e fontes web no seu projeto "Cardápio React" e fazer o commit no GitHub.

## 1. Preparação

Antes de começar, certifique-se de ter:
- Uma cópia local do seu repositório GitHub
- Node.js e npm instalados
- Acesso ao seu repositório GitHub

## 2. Implementação das Otimizações

### 2.1 Code Splitting Estratégico

1. **Identifique componentes adicionais para code splitting**:
   - Componentes grandes não essenciais para a primeira visualização
   - Componentes usados apenas em interações específicas
   - Seções distintas da aplicação

2. **Modifique as importações para usar React.lazy()**:
   ```jsx
   // Antes
   import MeuComponente from './components/MeuComponente';
   
   // Depois
   const MeuComponente = React.lazy(() => import('./components/MeuComponente'));
   ```

3. **Envolva os componentes com Suspense**:
   ```jsx
   <Suspense fallback={<div>Carregando...</div>}>
     <MeuComponente />
   </Suspense>
   ```

### 2.2 Otimização de Fontes Web

1. **Para Google Fonts**:
   - Abra o arquivo `public/index.html`
   - Adicione as tags preconnect antes do link da fonte:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     ```
   - Adicione `&display=swap` ao final da URL do Google Fonts:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
     ```

2. **Para fontes auto-hospedadas**:
   - Localize as regras `@font-face` no seu CSS
   - Adicione a propriedade `font-display: swap`:
     ```css
     @font-face {
       font-family: 'MinhaFonte';
       src: url('./fonts/minhafonte.woff2') format('woff2');
       font-weight: normal;
       font-style: normal;
       font-display: swap;
     }
     ```

## 3. Teste Local

1. **Execute a build de produção**:
   ```bash
   npm run build
   ```

2. **Analise os chunks gerados**:
   - Examine a pasta `build/static/js`
   - Observe os arquivos `.chunk.js` gerados

3. **Teste localmente**:
   ```bash
   npx serve -s build
   ```

4. **Analise a performance**:
   - Abra o DevTools > Network
   - Observe os chunks de JavaScript carregados
   - Filtre por "Font" para verificar o carregamento das fontes
   - Execute o Lighthouse para verificar FCP, LCP, TTI e CLS

## 4. Commit e Push para o GitHub

1. **Adicione as alterações**:
   ```bash
   git add .
   ```

2. **Faça o commit com uma mensagem descritiva**:
   ```bash
   git commit -m "perf: Aplica code splitting a mais componentes e otimiza carregamento de fontes"
   ```

3. **Envie para o GitHub**:
   ```bash
   git push origin main
   ```

## 5. Deploy para Produção

1. **Se estiver usando Vercel ou Netlify**:
   - O deploy será automático após o push para o GitHub

2. **Se estiver usando outro serviço**:
   - Siga as instruções específicas do serviço para fazer o deploy da pasta `build`

## 6. Documentação para Entrega

Prepare um comentário detalhado para a entrega no Classroom, incluindo:

1. **Componentes otimizados**:
   - Liste quais componentes foram divididos com React.lazy()
   - Explique por que esses componentes foram escolhidos

2. **Otimização de fontes**:
   - Descreva como as fontes foram otimizadas
   - Mencione se usou display=swap, preconnect, etc.

3. **Resultados de performance**:
   - Compare as métricas antes e depois (FCP, LCP, TTI, CLS)
   - Analise o impacto no tamanho dos bundles
   - Comente sobre o comportamento do carregamento das fontes

4. **Links**:
   - GitHub: [seu-usuario/seu-repositorio](https://github.com/seu-usuario/seu-repositorio)
   - Deploy: [url-do-deploy](https://seu-deploy.vercel.app)
