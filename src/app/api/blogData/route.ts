import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      posts: await prisma.post.findMany({
        take: 20,
        skip: parseInt(new URL(req.url).searchParams.get('page') as string, 10) * 20,
        include: { author: true, sections: true },
        orderBy:{created_at:'desc'}
      })
    });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
