import { sendMail } from '../utils/sendMail';
import { validateCaptcha } from '../utils/validateCaptcha';

export default defineEventHandler(async (event) => {
  try {
    // console.log('Handler started');

    const body = await readFormData(event);
    // console.log('Form data read:', body);

    // FormData to JSON
    const {
      name,
      email,
      message,
      'cf-turnstile-response': turnstileToken,
    } = Object.fromEntries(body);

    const token = String(turnstileToken);

    // Validate the token by calling the "/siteverify" API endpoint.
    const { validationApiResponse } = await validateCaptcha(event, token);

    // If the token is invalid, return a 422 status code
    if (!('success' in validationApiResponse)) {
      console.log('Validation failed');
      return new Response('Validation Error', {
        status: 422,
        statusText: JSON.stringify(validationApiResponse),
      });
    }

    // If the token is valid, send the email
    const mail = {
      name: name.toString(),
      email: email.toString(),
      message: message.toString(),
    };

    try {
      await sendMail({
        mail,
        event,
      });
    } catch (error) {
      // Log the error and return a 500 status code
      console.error('SendMail error:', error);

      return new Response('Internal Server Error', { status: 500 });
    }

    return new Response('Email sent', { status: 200 });
  } catch (error) {
    console.error('Handler error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
});
