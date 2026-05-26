import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => {
  const salt = bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}