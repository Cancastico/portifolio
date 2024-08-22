import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/lib/jwt';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(req: Request) {
  return NextResponse.json({message:'Cadastros Bloqueados pelo Administrador'}, { status: 200 });
  // const { name, email, password, username }: { name: string, email: string, password: string, username: string } = await req.json();
  // // Verifica se o e-mail ou o username já existem
  // const existingUser = await prisma.user.findFirst({
  //   where: { OR: [{ email }, { username }] },
  // });

  // if (existingUser) {
  //   return NextResponse.json({ error: 'E-mail ou username já estão em uso.' }, { status: 400 });
  // }

  // // Criptografa a senha
  // const hashedPassword = await bcrypt.hash(password, 10);

  // // Cria o novo usuário
  // const newUser = await prisma.user.create({
  //   data: {
  //     name,
  //     email: email.toUpperCase(),
  //     password: hashedPassword,
  //     username,
  //   },
  // });

  // const token = await generateToken({ userId: newUser.id })

  // return NextResponse.json({ newUser, token }, { status: 201 });
}
