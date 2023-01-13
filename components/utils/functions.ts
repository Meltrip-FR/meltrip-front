export const containsCapital = (word: string) => {
  for (let i = 0; i < word?.length; i++) {
    if (word[i] === word[i]?.toUpperCase()) {
      return true;
    }
  }
  return false;
};

export const detectLowerCase = (word: string) => {
  for (let i = 0; i < word?.length; i++) {
    if (word[i] === word[i]?.toLowerCase()) {
      return true;
    }
  }
  return false;
};

export const containsSpecialChar = (word: string) => {
  let specialChars = "!@#$%^&*()_+-=[]{}|;':<>,.?/";
  for (var i = 0; i < word.length; i++) {
    if (specialChars.indexOf(word[i]) !== -1) {
      return true;
    }
  }
  return false;
};
