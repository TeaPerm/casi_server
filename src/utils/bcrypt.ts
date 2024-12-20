import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hash(rawPassword, SALT);
}

export async function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compare(rawPassword, hash);
}
