import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export async function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1]; // Assume que o token vem no formato "Bearer <token>"

  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido.' }, { status: 401 });
  }

  try {
    // Verifica o token
    await verifyToken(token);
    return NextResponse.next(); // Permite a requisição continuar
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido ou expirado.' }, { status: 401 });
  }
}

// Define quais rotas serão protegidas
export const config = {
  matcher: ['/api/post/:path*'], // Adapte para as rotas que você deseja proteger
};
