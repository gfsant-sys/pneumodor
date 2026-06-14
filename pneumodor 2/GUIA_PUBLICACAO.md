# Pneumo D'Or — Guia de Publicação Online
## Tempo total: ~25 minutos

---

## PARTE 1 — Supabase (banco de dados) ~10 min

### 1.1 Criar conta
1. Acesse https://supabase.com
2. Clique **Start your project** → entre com sua conta Google ou GitHub
3. Clique **New project**
4. Preencha:
   - **Name:** pneumodor
   - **Database Password:** escolha uma senha forte e anote
   - **Region:** South America (São Paulo)
5. Clique **Create new project** e aguarde ~2 minutos

### 1.2 Criar a tabela
1. No menu lateral, clique em **SQL Editor**
2. Clique **New query**
3. Abra o arquivo `supabase_setup.sql` (incluso nesta pasta) e copie todo o conteúdo
4. Cole no editor e clique **Run** (▶)
5. Deve aparecer "Success. No rows returned"

### 1.3 Pegar as credenciais
1. No menu lateral, clique em **Project Settings** (ícone de engrenagem)
2. Clique em **API**
3. Anote dois valores:
   - **Project URL** → algo como `https://xyzabc.supabase.co`
   - **anon public key** → uma chave longa que começa com `eyJ...`

---

## PARTE 2 — Vercel (hospedagem) ~10 min

### 2.1 Criar conta
1. Acesse https://vercel.com
2. Clique **Sign Up** → entre com sua conta GitHub
   - Se não tiver GitHub: crie em https://github.com (grátis, 2 minutos)

### 2.2 Subir os arquivos
1. No Vercel, clique **Add New Project**
2. Clique **Browse** ou arraste a pasta `pneumodor` inteira
   - A pasta contém: `package.json`, `vercel.json`, pasta `api/`, pasta `public/`
3. Clique **Deploy**

### 2.3 Configurar as variáveis de ambiente
Antes ou depois do deploy, vá em **Settings → Environment Variables** e adicione:

| Nome | Valor |
|------|-------|
| `ANTHROPIC_API_KEY` | sua chave da API do Anthropic (começa com `sk-ant-...`) |
| `SUPABASE_URL` | a Project URL do Supabase (ex: `https://xyzabc.supabase.co`) |
| `SUPABASE_ANON_KEY` | a anon public key do Supabase |

Após adicionar as variáveis, clique **Redeploy** para aplicar.

### 2.4 Acessar o app
- Vercel gera uma URL automática: `pneumodor-xxx.vercel.app`
- Você pode configurar um domínio próprio depois (ex: `pneumo.copador.com.br`)

---

## PARTE 3 — Chave da API do Anthropic

Se ainda não tiver:
1. Acesse https://console.anthropic.com
2. Clique **API Keys → Create Key**
3. Copie a chave (começa com `sk-ant-...`) — ela só aparece uma vez

---

## Resultado final

- **URL pública** acessível de qualquer celular ou computador
- **Todos os registros** salvos no banco Supabase (não no navegador)
- **Câmera funciona** — lê a folha preenchida e preenche automaticamente
- **Múltiplos usuários** acessando ao mesmo tempo sem conflito

---

## Custos

| Serviço | Plano gratuito |
|---------|---------------|
| Supabase | 500MB banco, ilimitado de linhas para este volume |
| Vercel | 100GB bandwidth/mês, mais que suficiente |
| Anthropic | ~$0.003 por foto lida (muito barato) |

Para o volume da Copa D'Or, o custo mensal estimado é **menos de R$ 5** (só a API do Anthropic).

---

## Dúvidas?

Se travar em qualquer passo, me mande uma screenshot e eu ajudo.
