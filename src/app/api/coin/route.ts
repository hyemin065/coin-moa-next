import connectMongoDB from '@/libs/mongodb';
import Coin from '@/models/coin';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const coins = await Coin.find();
  return NextResponse.json({ coins });
}

export async function POST(request: Request) {
  const { market, name, symbol, date, side, currency, average, quantity, totalAmount } = await request.json();
  await connectMongoDB();
  await Coin.create({
    market,
    name,
    symbol,
    date,
    side,
    currency,
    average,
    quantity,
    totalAmount
  });
  return NextResponse.json({ message: 'success' }, { status: 201 });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Coin.findByIdAndDelete(id);
  return NextResponse.json({ messgae: 'deleted' }, { status: 201 });
}
