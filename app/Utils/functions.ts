import crypto from 'crypto';

export const generateMD5 = (string: string) => {
  let hash = crypto.createHash('md5').update(string).digest('hex')

  return hash;
}
