export const Validate = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Invalid Email Address";
  if (!isPassword) return "Password must be at least 8 characters and include uppercase letters, lowercase letters, and numbers";
  return null;
};
