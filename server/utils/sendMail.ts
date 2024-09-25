import type { H3Event, EventHandlerRequest } from 'h3';

// For ES6
import { SendMailClient } from 'zeptomail';

type MailInfoFromForm = {
  name: string;
  email: string;
  message: string;
};

export const sendMail = async ({
  mail,
  event,
}: {
  mail: MailInfoFromForm;
  event: H3Event<EventHandlerRequest>;
}) => {
  const { email: configEmail } = useAppConfig(event);
  const runtimeConfig = useRuntimeConfig(event);

  const url = 'api.zeptomail.eu/';

  // https://www.npmjs.com/package/zeptomail
  const client = new SendMailClient({ url, token: runtimeConfig.zoho.token });

  return client.sendMail({
    from: {
      address: configEmail.sender.email,
      name: configEmail.sender.name,
    },
    to: [
      {
        email_address: {
          address: 'paulmelero@gmail.com',
          name: '🧠',
        },
      },
    ],
    subject: configEmail.subjectTemplate.replace('{{name}}', mail.name),
    htmlbody: `
        <p>Nombre: ${mail.name}</p>
        <p>Email: ${mail.email}</p>
        <p>Mensaje: ${mail.message}</p>
      `,
  });
};
