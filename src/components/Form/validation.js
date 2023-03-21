const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validation({ username, password }) {
  const errors = {};
  if (!regexEmail.test(username) || !username || !username.length > 35)
    errors.username = "Por favor ingresar su correo electronico correctamente";
  if (password.length > 10 || password.length < 6 || !password.includes(Number))
    errors.password =
      "La contraseña debe tener entre 6 y 10 caracteres, y al menos un caracter numerico";
  return errors;
}
