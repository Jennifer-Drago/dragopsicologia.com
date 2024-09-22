export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return {
    statusCode: 200,
    body: JSON.stringify({ body }),
  };
});
