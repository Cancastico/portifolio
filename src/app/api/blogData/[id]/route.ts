import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = await prisma.post.findUnique({ where: { id: postId } });

  if (!post) {
    return NextResponse.json({ error: 'Post não encontrado.' }, { status: 404 });
  }

  return NextResponse.json(post);
}