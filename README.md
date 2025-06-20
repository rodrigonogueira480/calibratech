# Calibratech - Website

## Configuração do Email

Para que o formulário de contato funcione, você precisa configurar as credenciais do Gmail:

1. **Ativar autenticação de 2 fatores** na conta Gmail (calibratechce@gmail.com)

2. **Gerar senha de app**:
   - Acesse: https://myaccount.google.com/security
   - Clique em "Senhas de app"
   - Selecione "Email" e "Outro (nome personalizado)"
   - Digite "Calibratech Website"
   - Copie a senha gerada

3. **Configurar arquivo .env**:
   - Abra o arquivo `.env`
   - Substitua `sua_senha_de_app_aqui` pela senha gerada

## Instalação e Execução

1. Instalar dependências:
```bash
npm install
```

2. Executar o servidor:
```bash
npm start
```

3. Acessar o site:
```
http://localhost:3000
```

## Para Desenvolvimento

```bash
npm run dev
```

Isso iniciará o servidor com nodemon para reinicialização automática.