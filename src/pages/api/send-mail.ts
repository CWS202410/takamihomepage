import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, date, time, people, notes } = req.body;

  // メール送信用のトランスポーター設定
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // または使用するメールサーバー
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@takami-29.jp',
      subject: '焼肉ハウスたかみ 予約申込',
      text: `
予約申込内容

お名前：${name}
電話番号：${phone}
予約日：${date}
予約時間：${time}
人数：${people}名様

備考：
${notes}

※このメールは予約申込です。
※店舗からの返信をもって予約確定となります。

焼肉ハウス　たかみ
https://goo.gl/maps/ghR75n7UGrmAU1Xi9
営業時間：　17:00～23：00（L.O 22:30）
定休日：水曜日
住所：大阪府豊中:市蛍池北町3丁目2番8号
TEL：06-6844-0200
駐車場：隣のTimes駐車場をご利用ください。
      `.trim(),
    });

    res.status(200).json({ message: 'メールが送信されました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ message: 'メールの送信に失敗しました' });
  }
} 