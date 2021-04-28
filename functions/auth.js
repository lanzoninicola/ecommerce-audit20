exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const serverPasscode = process.env.APP_PASSCODE;
  const { userPasscode } = JSON.parse(event.body);
  const _userPasscode = userPasscode.trim();

  if (serverPasscode === _userPasscode) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        authSuccess: true,
        message: "Usuário foi autenticado",
      }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      authSuccess: false,
      message: "A autenticação falhou. Por favor, tente novamente.",
    }),
  };
};
