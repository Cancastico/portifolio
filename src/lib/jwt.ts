import { jwtVerify, SignJWT, JWTPayload } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

export async function generateToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(SECRET_KEY));
}

export async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(SECRET_KEY); // Usando a mesma chave para verificação
    const response = await jwtVerify(token, secret);
    return response
  } catch (error) {
    throw new Error('Token inválido.');
  }
}
