export default defineEventHandler(async (event) => {
  const body = await readFormData(event);

  // FormData to JSON
  const { name, email, message } = Object.fromEntries(body);

  const mail = {
    to: 'contacto@dragopsicologia.com',
    subject: `[Contacto Web] Nuevo mensaje de ${name}`,
    html: `
      <p>Nombre: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mensaje: ${message}</p>
    `,
  };

  console.log({ mail });

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/gracias',
    },
  });
});
