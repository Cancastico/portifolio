import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const pageParam = new URL(req.url).searchParams.get('page');
    const page = parseInt(pageParam as string, 10);

    if (isNaN(page) || page < 0) {
      return NextResponse.json({ message: 'Invalid page parameter' }, { status: 400 });
    }

    const posts = await prisma.post.findMany({
      take: 20,
      skip: page * 20,
    });

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
