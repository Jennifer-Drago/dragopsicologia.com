import brevo, { TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

export default defineEventHandler(async (event) => {
  try {
    console.log('Handler started');
    const config = useRuntimeConfig(event);
    const body = await readFormData(event);
    console.log('Form data read:', body);

    // FormData to JSON
    const {
      name,
      email,
      message,
      token: turnstileToken,
    } = Object.fromEntries(body);

    // Validate the token by calling the
    // "/siteverify" API endpoint.
    const ip = getHeader(event, 'CF-Connecting-IP');
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const validationApiResponse = await (
      await fetch(url, {
        body: JSON.stringify({
          secret: config.turnstile.secretKey,
          response: turnstileToken,
          remoteip: ip,
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
    ).json();
    console.log('Validation API response:', validationApiResponse);

    // If the token is valid, send the email
    if (validationApiResponse?.success) {
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
        console.log('Sending email...');
        const sendEmailPromise = defaultClient.sendTransacEmail(sendSmtpEmail);

        // Set a timeout for the email sending operation
        let timeoutId: NodeJS.Timeout;
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Email sending timed out')), 10000)
        );

        await Promise.race([sendEmailPromise, timeoutPromise]).finally(() =>
          clearTimeout(timeoutId)
        );
        console.log('Email sent successfully');

        return new Response('Success', { status: 200 });
      } catch (error) {
        console.error('Error sending email:', error);

        if (String(error).includes('timeout')) {
          return new Response('Email sending timed out', { status: 504 });
        }

        return new Response('Error', { status: 500 });
      }
    }

    console.log('Validation failed');
    return new Response('Validation Error', {
      status: 422,
      statusText: JSON.stringify(validationApiResponse),
    });
  } catch (error) {
    console.error('Handler error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
});
