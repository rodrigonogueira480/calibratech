# Configuração do EmailJS

Para que o formulário de contato funcione, siga estes passos:

## 1. Criar conta no EmailJS
- Acesse: https://www.emailjs.com/
- Crie uma conta gratuita

## 2. Configurar serviço de email
- No dashboard, clique em "Email Services"
- Clique em "Add New Service"
- Escolha "Gmail"
- Conecte com a conta: calibratechce@gmail.com
- Anote o **Service ID** gerado

## 3. Criar template de email
- Clique em "Email Templates"
- Clique em "Create New Template"
- Use este template:

```
Assunto: Novo contato do site - {{from_name}}

Conteúdo:
Novo contato recebido pelo site da Calibratech:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Empresa: {{company}}

Mensagem:
{{message}}
```

- Anote o **Template ID** gerado

## 4. Obter chave pública
- Vá em "Account" > "General"
- Copie a **Public Key**

## 5. Atualizar o código
No arquivo `script.js`, substitua:
- `YOUR_PUBLIC_KEY` pela sua Public Key
- `YOUR_SERVICE_ID` pelo seu Service ID  
- `YOUR_TEMPLATE_ID` pelo seu Template ID

## Exemplo:
```javascript
emailjs.init('user_1234567890abcdef'); // Sua Public Key
emailjs.send('service_gmail', 'template_contact', templateParams) // Seus IDs
```