exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      foo: process.env.APP_PASSCODE,
    }),
  };
};
