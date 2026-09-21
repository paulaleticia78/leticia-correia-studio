# Letícia Correia Studio — Website

Site oficial do Letícia Correia Studio (Porto, Portugal — pestanas,
sobrancelhas e lábios), construído com Next.js 14 (App Router), TypeScript e
Tailwind CSS.

Este projeto é baseado na **identidade real** do Studio: nome, morada,
telefone, Instagram e link de marcação foram fornecidos diretamente e não
foram inventados. Serviços, avaliações e fotografias seguem a mesma regra —
só entra o que está confirmado; o resto fica marcado como `[INSERIR ...]` e
pronto para edição.

> Nota sobre estrutura/UX: a organização de secções (percurso "escolhe o
> primeiro passo", diagnóstico por necessidade, etc.) foi inspirada, em
> passes anteriores deste projeto, na experiência de https://byher.pt/ —
> apenas o *padrão* de navegação, nunca texto, imagens, logótipo ou código.

## ⚠️ Dados confirmados vs. por confirmar

**Confirmado diretamente pelo Studio (não inventado):**
- Nome: Letícia Correia Studio
- Morada: Rua de Costa Cabral, Prédio 777 A, Sala 8, 4200-224 Porto, Portugal
- Telefone / WhatsApp: +351 938 435 436
- Instagram: [@leticiacorreia.pt](https://www.instagram.com/leticiacorreia.pt/)
- Marcação: Noona — https://noona.app/leticiacorreiastudio
- Avaliação Google: 5,0/5, baseada em 8 avaliações
- Serviços: Lash Lifting (Pestanas), Brow Lamination e Design de
  Sobrancelhas (Sobrancelhas)
- Hero: nome, subtítulo "Pestanas • Sobrancelhas • Lábios" e mensagem
  "Realce a sua beleza, preserve a sua naturalidade."
- SEO: título e descrição exatos pedidos para o Studio

**Por confirmar (procura `[INSERIR ...]` no código):**
- Email, horário de funcionamento, Facebook/TikTok, link direto das
  avaliações Google, preços e durações dos serviços, política de marcação
  e cancelamento, texto de apresentação/biografia
- Serviços de **Lábios** — nenhum foi confirmado nas fontes oficiais, por
  isso a categoria aparece no site como "a confirmar com o Studio" em vez
  de um serviço inventado
- **Fotografias reais** — ver secção seguinte

## 📸 Fotografias — ação necessária

O Instagram (@leticiacorreia.pt) é a fonte principal de imagens pedida,
mas este ambiente não consegue aceder ao Instagram para descarregar fotos
(o `robots.txt` do Instagram bloqueia acesso automatizado, e mesmo que não
bloqueasse, republicar fotografias de terceiros sem confirmação de
direitos não seria apropriado). **Regra seguida à risca:** nunca usar fotos
de outras profissionais, outros estúdios ou bancos de imagens como se
fossem trabalhos da Letícia — por isso todas as imagens atuais são
**placeholders gerados automaticamente**, com a marca "LC" e uma etiqueta a
identificar claramente o que deve lá estar (nunca fotografias reais nem
copiadas de outro site).

Para completar o site com fotografias reais, envia os ficheiros do Studio
(exportados do Instagram ou noutra fonte com direitos confirmados) e
substitui-os mantendo a mesma estrutura de pastas:

```
public/images/
  hero/            → imagem principal da homepage (impactante, Studio ou trabalho)
  lash-lifting/     → resultados de Lash Lifting
  pestanas/         → pestanas em geral
  brow-lamination/  → resultados de Brow Lamination
  sobrancelhas/     → sobrancelhas em geral
  antes-depois/     → transformações reais (antes → depois)
  studio/           → ambiente do espaço
  leticia/          → a profissional a trabalhar / retrato
  detalhes/         → detalhes de trabalhos, produtos e materiais
  portfolio/        → galeria principal (Pestanas / Sobrancelhas / Lábios)
  mobile/           → recortes otimizados para mobile, se necessário
  branding/         → logótipo e imagem de partilha (Open Graph)
```

Basta substituir o ficheiro mantendo o mesmo nome, ou atualizar o caminho
em `src/data/services.ts` / `src/data/gallery.ts`. Não repetir a mesma
imagem em mais do que uma secção.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — paleta premium (branco, off-white, bege, nude,
  champagne, castanho suave, dourado só como detalhe)
- Sem dependências extra desnecessárias — animações e menu em React puro
- Pronto para deploy na **Vercel**

## Como correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Este ambiente não teve acesso ao registo do npm, por isso o `npm install`
> ainda não foi executado — todos os ficheiros foram escritos manualmente e a
> sintaxe TypeScript/JSX foi verificada uma a uma (`tsc --noEmit`, sem erros
> de sintaxe). Corre `npm install` na tua máquina (ou deixa a Vercel fazê-lo
> automaticamente no deploy).

## Pré-visualização já disponível

Como este ambiente não consegue instalar pacotes npm (para correr `next dev`
e dar-te um `localhost:3000` real), foi publicada uma versão estática
(HTML/CSS/JS puro, sem build) fiel ao design e ao conteúdo real deste
projeto — mesma paleta, tipografia, secções, copy do Hero, morada, telefone,
Instagram e link de marcação Noona reais — para poderes navegar e testar já
no telemóvel ou desktop através do link partilhado na conversa. É uma
representação visual e de navegação (âncoras dentro da página, fotos ainda
placeholder), não o projeto Next.js a correr; para o site real e funcional,
usa `npm install && npm run dev` ou faz deploy na Vercel (secção seguinte).

## Como fazer deploy na Vercel

1. Cria um repositório Git e faz push desta pasta.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importa o repositório.
3. A Vercel deteta automaticamente o Next.js — não é preciso configurar nada.
4. Define o domínio definitivo em **Project → Settings → Domains**.
5. **Deploy**.

Alternativa via CLI: `npm i -g vercel && vercel`

## Páginas criadas

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, primeiro passo, apresentação, Experiência Letícia Correia, serviços, destaque, portefólio, antes & depois, **avaliações do Google**, FAQ, CTA final "Pronta para realçar a sua beleza?" (Instagram / WhatsApp / Localização / Google Reviews) |
| `/servicos` | Preçário completo, agrupado por categoria (Pestanas / Sobrancelhas / Lábios) |
| `/servicos/[servico]` | Página individual de cada serviço (gerada a partir de `src/data/services.ts`) |
| `/sobre` | Apresentação do Studio e da profissional |
| `/galeria` | Portefólio com filtros: Todos / Pestanas / Sobrancelhas / Lábios / Antes & Depois |
| `/contactos` | Morada, telefone, WhatsApp, Instagram, horário, mapa e formulário |
| `/agendar` | Marcação via Noona ou por WhatsApp, com informação prática |
| `/produtos` | **Preparada para uma futura loja** (ver secção própria abaixo) — não está no menu ainda |
| `/politica-de-privacidade` | Política de privacidade (modelo genérico RGPD) |

## Menu principal

Ordem atual, conforme pedido:

```
Início | Sobre | Serviços | Portfólio | Avaliações | Contactos | Agendar
```

"Produtos" fica fora do menu por agora — ver secção "Preparação para futura
loja de produtos" abaixo.

## Avaliações do Google

Secção dedicada na homepage (`#avaliacoes`, componente
`GoogleReviewsSection`), com identidade premium (fundo bege/champagne,
detalhes em rosé e dourado), nota média (5,0/5), número de avaliações (8),
um depoimento real e botão "Ver todas as avaliações no Google". Entra em
scroll com animação suave (estrelas, nota e cards).

- **Regra seguida:** só é mostrado texto de avaliações reais e públicas —
  nunca inventado nem alterado. O único depoimento incluído (Carolina
  Gomes) foi partilhado diretamente pelo Studio, com o texto exato mantido.
- **Sem integração automática com o Google Business Profile** disponível
  neste ambiente — os dados (nota, contagem, depoimentos) vêm de
  `siteConfig.googleRating` e `src/data/testimonials.ts`, ambos editáveis
  manualmente até existir uma ligação automática (API do Google
  Business Profile ou widget de terceiros).
- Falta apenas `siteConfig.googleReviewsUrl` (link direto das avaliações)
  para o botão "Ver todas no Google" ficar ativo.

## Preparação para futura loja de produtos

Ainda **não** existe uma loja completa — só a estrutura, para não teres de
reconstruir o projeto quando o Studio confirmar o catálogo:

- `src/data/products.ts` — tipo `Product` e array vazio, pronto a preencher
- `src/app/produtos/page.tsx` — página já criada, com estado "brevemente";
  mostra os produtos automaticamente assim que `products.ts` tiver itens
- **Não está ligada no menu** (`siteConfig.nav`) — liga-a quando quiseres
  publicar a loja
- Segue a mesma identidade visual do site (bege + champagne + rosé +
  dourado); quando a loja for ativada, ainda faltará: preços reais, fotos
  dos produtos e integração de checkout/WhatsApp

## Componentes principais

`Header`, `Footer`, `Hero`, `ServiceCard`, `FeaturedBanner`, `GalleryGrid`,
`BeforeAfter`, `ExperienceSection`, `GoogleReviewsSection` (avaliações
premium com depoimentos reais), `Faq`, `ContactForm`, `MapEmbed`, `InfoCard`,
`SectionHeading`, `PageHero`, `Button`, `WhatsAppButton`, `AnimatedSection`
(scroll reveal, sem dependências externas), `LocalBusinessJsonLd` (dados
estruturados SEO).

## Onde alterar conteúdo

Tudo centralizado, para não teres de mexer nos componentes:

| Ficheiro | O que contém |
| --- | --- |
| `src/config/site.ts` | Nome, morada, telefone, WhatsApp, Instagram, horário, **`BOOKING_URL`**, **`WHATSAPP_NUMBER`**, avaliação Google |
| `src/data/services.ts` | Serviços confirmados: nome, categoria, descrição, duração, preço, imagem, destaques |
| `src/data/gallery.ts` | Imagens do portefólio, categorias e "antes & depois" |
| `src/data/testimonials.ts` | Avaliações reais mostradas na secção "Avaliações do Google" (texto exato, nunca inventado) |
| `src/data/products.ts` | Produtos da futura loja (vazio por agora — ver secção "Preparação para futura loja") |
| `src/data/faq.ts` | Perguntas frequentes |

Basta editar os valores nestes ficheiros — o site inteiro atualiza automaticamente,
incluindo as páginas individuais de cada serviço.

## Integrações necessárias

1. **Marcações online** — todos os botões "Agendar o meu horário" apontam
   para `BOOKING_URL` em `src/config/site.ts`, já configurado para o Noona
   (`https://noona.app/leticiacorreiastudio`).
2. **WhatsApp** — `WHATSAPP_NUMBER` já configurado para +351 938 435 436;
   confirma se este é também o número de WhatsApp do Studio.
3. **Formulário de contacto** — `src/app/api/contact/route.ts` recebe os
   dados mas ainda não envia email. Vem com um exemplo comentado para
   integrar o [Resend](https://resend.com) (ou outro serviço à tua escolha).
4. **Google Maps** — `address.mapsEmbedUrl`/`address.mapsUrl` já apontam
   para a morada real; confirma o pin exato assim que possível.
5. **Avaliações Google** — mostra-se o número agregado real (5,0/5, 8
   avaliações); adiciona `googleReviewsUrl` em `src/config/site.ts` para
   ligar diretamente à página de avaliações.

## Estrutura do projeto

```
src/
  app/            → páginas (App Router), incluindo /servicos/[servico], metadata, sitemap, robots, API route
  components/      → componentes reutilizáveis
  config/site.ts   → configuração central (contactos, horário, BOOKING_URL, WHATSAPP_NUMBER)
  data/            → serviços, galeria, avaliações, FAQ
public/
  images/          → imagens organizadas por categoria (ver secção "Fotografias" acima)
```

## Atualização — versão final (fundo claro, novos serviços, marcações)

**1. Fundo claro em todo o site.** A paleta foi trocada para os valores exatos
pedidos: bg principal `#F7F0EA`, bg secundário `#EFE1D8`, off-white `#FCF9F6`,
rosé `#C99586`, rosé claro `#E7CFC8`, dourado/champagne `#B9976B`, texto
principal `#4A342D`, texto secundário `#765F56` — tudo em
`tailwind.config.ts` (tokens `cream`/`sand`/`clay`/`ink`/`rose`/`gold`) e
`src/app/globals.css`. Não sobra nenhuma secção com `bg-ink-950`/fundo
escuro; foi feita uma auditoria completa a `bg-black`, `bg-zinc`,
`bg-neutral`, `bg-gray`, overlays pretos e gradientes escuros — nada
encontrado fora de acentos pontuais claros (ex: pílula ativa do filtro da
galeria, botão de envio do formulário), que já usam a nova cor `ink-900`
(castanho profundo) e não leem como "site dark".

**2. Novas imagens.** `src/data/services.ts` passou a usar imagens reais
recortadas do material de marketing com o logótipo do Studio fornecido
diretamente (não geradas nem inventadas aqui) para Sobrancelhas, Lash
Lifting e Brow Lamination, e três novos serviços com imagem própria:
Extensão de Cílios, Procedimento Labial e Micropigmentação. Ficam guardadas
em `public/images/{sobrancelhas,lash-lifting,brow-lamination,extensao-cilios,labios,micropigmentacao}/`.
As fotografias reais da Letícia (`leticia-retrato.jpg`, `leticia-trabalhando.jpg`)
continuam a ser usadas em `/sobre` e não foram substituídas.

**3. Botões mais destacados.** `src/components/Button.tsx` tem agora
sombra mais forte, elevação e leve escala no hover, e o botão principal de
marcação (`ctaPrimary`) é o CTA mais visível do site — também reforçado no
cabeçalho (nav "Agendar" com fundo dourado/rosé destacado) e no formulário
de contacto.

**4. Secção "Agende o Seu Momento".** Novo componente
`src/components/BookingSection.tsx`, usado na homepage (âncora `#marcacoes`)
e como bloco principal da página `/agendar`: lista todos os serviços com
preço (placeholder até confirmação) e botão "Agendar" individual, mais uma
área dedicada ao sistema de marcações.

**5. Noona — widget oficial.** O Noona suporta um widget de marcações
embutido por iframe (Noona HQ → Online Bookings → Visibility → "Allow
online bookings on your website"), mas o código do iframe só é gerado
dentro da conta Noona do Studio — não temos acesso a partir daqui. Preparei
o ponto de integração: preenche `siteConfig.noonaEmbedUrl` (`src/config/site.ts`)
com esse URL assim que o gerares, e a secção de marcações passa a mostrar o
widget embutido automaticamente. Enquanto ficar vazio, mostra-se um cartão
com a identidade do Noona preservada e link direto — nunca um link solto
sem estilo.

**6. Preços.** A página pública de marcações do Noona
(`noona.app/leticiacorreiastudio`) não mostra preços sem entrar no fluxo de
marcação (confirmado por pesquisa e leitura direta da página); por isso
**nenhum preço foi inventado** — todos os serviços mostram `[INSERIR PREÇO]`
até serem confirmados diretamente (edição em `src/data/services.ts`).

**7. Vercel.** `package.json` mantém `"build": "next build"`; não foi
tentado corrigir o bloqueio de rede 403 do npm dentro deste sandbox — a
verificação de sintaxe foi feita via `tsc --noEmit` isolado (sem
`node_modules`), e todos os caminhos de imagem foram validados. O projeto
está pronto para build externo (GitHub → Vercel, ou Vercel Drop via ZIP).

## Atualização — marcação direta por serviço (links reais do Noona)

Foram fornecidos 12 links diretos de marcação (`noona.pt/leticiacorreiastudio/experience/...`).
Cada um foi identificado abrindo a página e lendo o nome/preço reais publicados
nela — **nada foi inventado**. O catálogo real de "Pestanas" acabou por ser
muito mais granular do que o que estava modelado antes (várias técnicas de
lifting e de extensão, com preços próprios), por isso `src/data/services.ts`
foi reestruturado para refletir exatamente esse catálogo:

| Serviço (Pestanas) | Preço confirmado | Link direto |
|---|---|---|
| Lifting de Pestanas c/ Coloração | 35,00 € | ✅ |
| Lifting Coreano c/ Coloração | 40,00 € | ✅ |
| Extensão de Pestanas Fio a Fio | 32,00 € | ✅ |
| Extensão Volume Egípcio | 35,00 € | ✅ |
| Extensão Fox Eyes | 40,00 € | ✅ |
| Extensão Efeito Wispy | 38,00 € | ✅ |
| Extensão Efeito Rímel | 38,00 € | ✅ |
| Extensão Volume Soft | 35,00 € | ✅ |
| Extensão Volume Brasil/Egípcio + Brow Lamination (combo) | 65,00 € | ✅ |
| Manutenção de Extensão (até 20 dias) | 30,00 € | ✅ |
| Manutenção Fox Eyes (até 20 dias) | 33,00 € | ✅ |
| Remoção de Extensão | 10,00 € | ✅ |

**Sem link direto entre os 12 fornecidos** (o botão "Agendar" usa o link
geral do Noona como alternativa — nunca inventado): **Brow Lamination**
(standalone — só existe combinado com extensão no link `I4NGjVkoBhf6hQHYrD3uHJsk`,
que já está associado ao serviço de combo acima), **Design de Sobrancelhas**,
**Micropigmentação**, **Procedimento Labial**. Lista também disponível em
`SERVICOS_SEM_LINK_DIRETO` (`src/data/services.ts`) para correção rápida
assim que a Letícia enviar os links em falta.

Cada card de serviço (`ServiceCard.tsx`), a página de detalhe
(`/servicos/[servico]`) e a secção "Agende o Seu Momento"
(`BookingSection.tsx`) já abrem `service.bookingUrl` diretamente — o cliente
não passa pela página geral do Noona quando existe link direto.

**Sobre "novas imagens já adicionadas ao projeto":** verificado diretamente
no sistema de ficheiros — não chegou nenhum ficheiro de imagem novo com este
pedido (só os 12 links e um ficheiro de texto duplicado). As imagens usadas
continuam a ser as mesmas 6 recortadas do material de marketing na atualização
anterior (`public/images/{sobrancelhas,lash-lifting,brow-lamination,extensao-cilios,labios,micropigmentacao}/`),
reaproveitadas nos novos serviços de pestanas por categoria visual.

## Publicação contínua — GitHub → Vercel

**Framework:** Next.js 14.2.15 (App Router) + TypeScript + Tailwind CSS.
**Página inicial:** `src/app/page.tsx` (rota `/`) — layout raiz em `src/app/layout.tsx`.
**Comando de build:** `next build` (script `"build"` em `package.json`) — Vercel deteta isto automaticamente, sem configuração extra (nenhum `vercel.json` é necessário).
**Comando de start (produção):** `next start`. **Dev local:** `next dev`.

O repositório Git já foi inicializado localmente (branch `main`, primeiro
commit feito) e está pronto para GitHub. **Este ambiente não tem acesso à tua
conta GitHub nem à tua conta Vercel** — por segurança, nunca introduzo
tokens/credenciais em nome de ninguém — por isso os dois últimos passos
(criar o repositório remoto e ligar a Vercel) são feitos por ti, com os
comandos exatos abaixo.

### 1. Criar o repositório no GitHub

Cria um repositório **vazio** (sem README, sem `.gitignore`, sem licença —
para não entrar em conflito com o que já está aqui) em
[github.com/new](https://github.com/new), por exemplo `leticia-correia-studio`.

### 2. Enviar este projeto para esse repositório

Depois de extraíres o ZIP, dentro da pasta do projeto:

```bash
git remote add origin https://github.com/<o-teu-utilizador>/<o-nome-do-repo>.git
git push -u origin main
```

(O ZIP já inclui a pasta `.git` com o commit inicial — não precisas de correr
`git init` outra vez. Se preferires SSH em vez de HTTPS, usa o URL
`git@github.com:<utilizador>/<repo>.git`.)

### 3. Ligar o repositório à Vercel (conta já existente)

1. Em [vercel.com/new](https://vercel.com/new), com a tua conta Vercel já
   existente, escolhe **Import Git Repository** e seleciona o repositório
   que acabaste de criar.
2. A Vercel deteta automaticamente **Framework: Next.js** — não é preciso
   alterar o Build Command (`next build`) nem o Output Directory (fica a
   cargo do preset da Vercel para Next.js).
3. Variáveis de ambiente: nenhuma é obrigatória para o site funcionar. Só
   precisas de adicionar `RESEND_API_KEY` (ou equivalente) se ativares o
   envio de email no formulário de contacto — ver `.env.example` e
   `src/app/api/contact/route.ts`.
4. Clica **Deploy**. Em 1–2 minutos tens o site online num domínio
   `*.vercel.app`, com a opção de ligares o teu domínio próprio depois em
   Project Settings → Domains.

### 4. Deployments automáticos a partir daqui

Depois deste primeiro deploy, o fluxo passa a ser automático: qualquer
`git push` para o branch `main` (feito por ti, ou por mim nesta conversa se
me deres acesso de push a esse repositório) dispara um novo deployment na
Vercel sozinho — não é preciso repetir nenhum destes passos.

### Ficheiros que têm de estar na raiz do repositório

Todos já estão prontos e no sítio certo: `package.json`, `next.config.mjs`,
`tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`,
`.eslintrc.json`, `.gitignore`, `next-env.d.ts`, e as pastas `src/` e
`public/` completas (imagens, fontes — via `next/font/google`, carregadas no
build — componentes e páginas). Não existe nem é preciso nenhum `index.html`
— o Next.js App Router serve `src/app/page.tsx` como página inicial
diretamente; criar um `index.html` na raiz quebraria o projeto e não foi
feito.

**Resumo do estado:**
- ✅ Framework: Next.js 14 (App Router)
- ✅ Página inicial: `src/app/page.tsx`
- ✅ Build: `next build`
- ✅ Pronto para GitHub (repositório Git local inicializado, commit feito, branch `main`)
- ✅ Pronto para Vercel (nenhuma configuração extra necessária — deteção automática)
- ✅ Todas as imagens, fontes, componentes e páginas incluídos; caminhos de imagem validados (todos relativos a `public/`, funcionam automaticamente após o deploy)
- ✅ Nenhum `index.html` criado — arquitetura Next.js mantida integralmente
- ✅ Design e conteúdo inalterados nesta passagem

## Atualização — novas fotografias reais adicionadas (Set 2026)

Foram recebidas 15 fotografias novas. Depois de analisar cada uma, **10 eram fotografia real e utilizável no site** — as restantes 5 eram material de marketing para redes sociais (com texto/gráficos sobrepostos) ou uma captura de ecrã da câmara, e não foram usadas como fotografia do site (ver lista abaixo).

**Adicionadas e já em uso:**
- `leticia/leticia-trabalhando-02.jpg` — procedimento em curso (plano largo) → nova secção "No dia a dia do Studio" em `/sobre`.
- `leticia/leticia-retrato-02.jpg` — retrato adicional → mesma secção em `/sobre`.
- `detalhes/detalhe-trabalho-03.jpg` e `detalhe-trabalho-04.jpg` — detalhes de procedimento → `/sobre`.
- `detalhes/detalhe-produtos-02.jpg` — produtos utilizados (Soft/Wave Pro-Curl) → `/sobre`.
- `extensao-cilios/extensao-cilios-02.jpg`, `03.jpg`, `04.jpg` — atribuídas a "Extensão Volume Egípcio", "Extensão Fox Eyes" e "Extensão Efeito Wispy" respetivamente, em `src/data/services.ts`, para dar mais variedade visual aos cartões de serviço (antes todos partilhavam a mesma imagem genérica).
- `portfolio/pestanas-04.jpg` e `pestanas-05.jpg` — novos itens na Galeria (`/galeria`).

Nenhuma fotografia real já aprovada foi substituída ou removida — as novas foram apenas acrescentadas.

**Não incorporadas como fotografia do site (e porquê):**
1. Gráfico "MIRROR CHECK" — reação de cliente com legenda em inglês sobreposta, formato de post/story do Instagram.
2. O mesmo colagem de 6 painéis com o logótipo LC já usado anteriormente como fonte de recortes — não é uma fotografia nova.
3. Gráfico "Feedback da cliente" (com a conversa de WhatsApp da Carolina Gomes) — moldura decorativa e miniaturas de story do Instagram, com texto fixo.
4. Fotografia do Gift Voucher — é uma fotografia real, mas o cartão físico mostra o nome de uma cliente e de quem ofereceu o presente ("Para: Megui" / "De: Titi e Primos"); dados pessoais de terceiros, não recomendável publicar sem confirmação da Letícia.
5. Captura de ecrã de uma app de câmara com grelha de enquadramento sobreposta — não é uma fotografia final, é a interface da câmara.

Se a Letícia quiser usar alguma destas 5 no site (por exemplo, uma versão do voucher sem os nomes, ou o testemunho da Carolina como texto simples), é só pedir.
site studio leticia correia
