# Setup EmailJS - Calibratech

## Passo 1: Criar conta EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up"
3. Use o email: calibratechce@gmail.com
4. Confirme o email

## Passo 2: Configurar Gmail Service
1. No dashboard, clique em "Email Services"
2. Clique em "Add New Service"
3. Selecione "Gmail"
4. Clique em "Connect Account"
5. Faça login com: calibratechce@gmail.com
6. Autorize o EmailJS
7. O Service ID será: `service_gmail_calibra`

## Passo 3: Criar Template
1. Clique em "Email Templates"
2. Clique em "Create New Template"
3. Template ID: `template_contact_form`
4. Configure:

**To Email:** calibratechce@gmail.com
**Subject:** Novo contato - {{from_name}}
**Content:**
```
Novo contato recebido pelo site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Empresa: {{company}}

Mensagem:
{{message}}
```

## Passo 4: Obter Public Key
1. Vá em "Account" > "General"
2. Copie a Public Key
3. Substitua no código: `iQRzEJrF_yKvmu-Ah`

## Status Atual
✅ Código já configurado com IDs padrão
✅ Pronto para funcionar após setup da conta