# Configuração Formspree - Envio Automático

## O que é o Formspree?
Serviço que permite envio de emails de formulários HTML sem backend.

## Setup Rápido (5 minutos)

### 1. Criar conta Formspree
- Acesse: https://formspree.io/
- Clique em "Get Started"
- Use o email: calibratechce@gmail.com
- Confirme o email

### 2. Criar novo formulário
- No dashboard, clique em "New Form"
- Nome: "Calibratech Contact Form"
- Email de destino: calibratechce@gmail.com
- Clique em "Create Form"

### 3. Obter endpoint
- Copie o endpoint gerado (ex: https://formspree.io/f/xpzvgqpb)
- Substitua no código `script-formspree.js` na linha:
```javascript
const response = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
```

## Status Atual
✅ Código já configurado com endpoint de teste
✅ Funciona imediatamente após criar conta
✅ Emails enviados automaticamente para calibratechce@gmail.com

## Vantagens
- ✅ Gratuito até 50 envios/mês
- ✅ Sem necessidade de servidor
- ✅ Proteção anti-spam integrada
- ✅ Confirmação automática por email