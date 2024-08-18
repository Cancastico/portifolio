import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/jwt'; // Importar função para verificar o JWT
import { Post } from '@/models/postModel';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido.' }, { status: 401 });
  }

  try {
    const user = verifyToken(token) as { userId: number };
    const { sections }: { sections: Post[] } = await req.json();
    const post = await prisma.post.create({
      data: {
        sections: { createMany: { data: sections.map((section) => { return { type: section.type, content: section.content } }) } },
        authorId: user.userId, // Assume que o ID do usuário é passado no token
      },
    });

    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido ou expirado.' }, { status: 401 });
  }
}
