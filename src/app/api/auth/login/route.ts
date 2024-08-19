import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/lib/jwt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password }: { email: string, password: string } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: email.toUpperCase() },
  });

  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Senha incorreta.' }, { status: 401 });
  }

  // Gera o token JWT com o ID do usuário
  const token = await generateToken({ userId: user.id });

  return NextResponse.json({ message: 'Login bem-sucedido!', token });
}
