import { verifyToken } from '@/lib/jwt'; // Importar função para verificar o JWT
import { Post } from '@/models/postModel';
import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido.' }, { status: 401 });
  }

  try {
    const user = (await verifyToken(token)).payload;
    const { post }: { post: Post[] } = await req.json();


    const newPost = await prisma.post.create({
      data: {
        sections: { createMany: { data: post.map((section) => { return { type: section.type, content: section.content } }) } },
        authorId: user.userId as number, // Assume que o ID do usuário é passado no token
      },
    })


    return NextResponse.json(newPost, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Erro ao tentar criar Post' }, { status: 401 });
  }
}
