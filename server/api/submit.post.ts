import staticFormsPlugin from '@cloudflare/pages-plugin-static-forms';

export default defineEventHandler(async () => {
  return staticFormsPlugin({
    respondWith: ({ formData, name: _formName }) => {
      const { name, email, message } = Object.fromEntries(formData);

      const subject = `New message from ${name} <${email}>`;

      const mail = {
        from: 'no-reply@dragopsicologia.com',
        to: 'dragopsicologia@gmail.com',
        subject,
        text: message,
      };

      console.log({ mail });

      return new Response(null, {
        status: 302,
        headers: {
          Location: '/gracias',
        },
      });
    },
  });
});
