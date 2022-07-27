import * as bcrypt from 'bcrypt';

const encryptPassword = async (password: string): Promise<string> => {
  const saltRounds = 11;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

export { encryptPassword };
