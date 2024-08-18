import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/jwt';
import { Post } from '@/models/postModel';
import { BaseModel } from '@/models/baseModel';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido.' }, { status: 401 });
  }

  try {
    const { sections }: { sections: BaseModel<Post>[] } = await req.json();
    const updatedPostSections = await Promise.all(
      sections.map(async (section) => {
        return prisma.postSection.upsert({
          where: {
            id: section.id, // Se houver um id, atualiza; caso contrário, cria
          },
          update: {
            type: section.type,
            content: section.content,
          },
          create: {
            postId: postId, // Referencia o post pai
            type: section.type,
            content: section.content,
          },
        });
      })
    );
    return NextResponse.json(updatedPostSections);
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido ou expirado.' }, { status: 401 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido.' }, { status: 401 });
  }

  try {
    const user = verifyToken(token) as { userId: number };
    await prisma.post.delete({ where: { id: postId, authorId: user.userId } });
    return NextResponse.json({ message: 'Post excluído com sucesso.' });
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido ou expirado.' }, { status: 401 });
  }
}
