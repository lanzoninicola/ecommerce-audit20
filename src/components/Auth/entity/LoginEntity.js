function LoginEntity() {
  const _chars = [8, 5, 3, 9, 2, 6, 7, 1, 4];

  function initCharsKeyboard() {
    return _chars;
  }

  function generateNewChars() {
    return _chars.reverse();
  }

  return {
    init: () => initCharsKeyboard(),
    generateNewSerie: () => generateNewChars(),
  };
}

export default LoginEntity;
