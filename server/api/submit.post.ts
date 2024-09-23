import brevo, { TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readFormData(event);

  const turnstileToken = body.get('cf-turnstile-response') || body.get('token');
  console.log('Turnstile token:', turnstileToken);
  const response = await verifyTurnstileToken(turnstileToken as string);

  if (!response.success) {
    return new Response('Validation Error', { status: 403 });
  }

  // FormData to JSON
  const { name, email, message } = Object.fromEntries(body);

  const mail = {
    sender: {
      email: 'contacto@dragopsicologia.com',
      name: '[Contacto Web] Dragopsicología.com',
    },
    // to: [{ email: 'contacto@dragopsicologia.com' }],
    to: [{ email: 'paul@graficos.net' }],
    replyTo: { email: email as string, name: name as string },
    subject: `[Contacto Web] Nuevo mensaje de ${name}`,
    htmlContent: `
      <p>Nombre: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mensaje: ${message}</p>
    `,
    tags: ['ContactoWeb'],
  };

  const defaultClient = new brevo.TransactionalEmailsApi();
  defaultClient.setApiKey(
    TransactionalEmailsApiApiKeys.apiKey,
    config.brevo.apiKey
  );

  const sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.sender = mail.sender;
  sendSmtpEmail.to = mail.to;
  sendSmtpEmail.replyTo = mail.replyTo;
  sendSmtpEmail.subject = mail.subject;
  sendSmtpEmail.htmlContent = mail.htmlContent;
  sendSmtpEmail.tags = mail.tags;

  try {
    await defaultClient.sendTransacEmail(sendSmtpEmail);

    return new Response('Success', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
});
