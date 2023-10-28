import connectMongoDB from '@/libs/mongodb';
import Coin from '@/models/coin';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const { market, name, symbol, date, side, currency, average, quantity, totalAmount } = await request.json();

  await connectMongoDB();
  await Coin.findByIdAndUpdate(id, { market, name, symbol, date, side, currency, average, quantity, totalAmount });

  return NextResponse.json({ message: 'updated' }, { status: 201 });
}

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const coin = await Coin.findOne({ _id: id });
  return NextResponse.json({ coin }, { status: 201 });
}
