import type { H3Event, EventHandlerRequest } from 'h3';

export const validateCaptcha = async (
  event: H3Event<EventHandlerRequest>,
  token: FormDataEntryValue | string
): Promise<{
  validationApiResponse: { success: boolean } | { error: string };
}> => {
  const config = useRuntimeConfig(event);
  const ip = getHeader(event, 'CF-Connecting-IP');
  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const validationApiResponse = await (
    await fetch(url, {
      body: JSON.stringify({
        secret: config.turnstile.secretKey,
        response: token,
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

  return { validationApiResponse };
};
