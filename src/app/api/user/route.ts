import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { id, password } = await request.json();
  await connectMongoDB();
  await User.create({ id, password });
  return NextResponse.json({ message: 'success' }, { status: 201 });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ messgae: 'deleted' }, { status: 201 });
}
``