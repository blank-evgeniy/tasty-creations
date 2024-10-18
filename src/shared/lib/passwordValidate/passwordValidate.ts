export const passwordAdvancedValidate: (password: string) => string[] = (
  password
) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/g.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasOnlyEnglishLetters = /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]*$/.test(
    password
  );

  const errors: string[] = [];

  if (!hasOnlyEnglishLetters) {
    errors.push("пароль может содержать только английские буквы и цифры");
  }
  if (password.length < minLength) {
    errors.push("пароль должен содержать не менее 8 символов");
  }
  if (!hasUpperCase) {
    errors.push("пароль должен содержать хотя бы одну заглавную букву");
  }
  if (!hasLowerCase) {
    errors.push("пароль должен содержать хотя бы одну строчную букву");
  }
  if (!hasNumbers) {
    errors.push("пароль должен содержать хотя бы одну цифру");
  }
  if (!hasSpecialChars) {
    errors.push("пароль должен содержать хотя бы один специальный символ");
  }
  console.log(hasNumbers);
  console.log(password);
  console.log(errors);
  return errors;
};