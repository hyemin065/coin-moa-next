import mongoose, { Schema } from 'mongoose';

const coinSchema = new Schema(
  {
    market: String, // 거래소
    name: String, // 코인이름
    symbol: String, //코인 심볼
    date: String, // 코인 매수/매도 날짜
    side: String, // 매수 or 매도
    currency: String, // 통화
    average: Number, // 평단
    quantity: Number, // 수량
    totalAmount: Number //합계
  },
  {
    timestamps: true,
    collection: 'coin'
  }
);

const Coin = mongoose.models.Coin || mongoose.model('Coin', coinSchema);

export default Coin;
