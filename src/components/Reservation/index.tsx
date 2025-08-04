import React, { useState, useCallback } from 'react';
import { Phone } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { FormInput } from './FormInput';
import { validateField } from '../../lib/validation';

interface FormErrors {
  [key: string]: string | null;
}

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  notes: string;
}

export function Reservation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempts, setSubmitAttempts] = useState(0);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    // 各フィールドのバリデーション
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // リアルタイムバリデーション
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempts(prev => prev + 1);

    // スパム対策: 短時間での複数回送信を防止
    if (submitAttempts >= 3) {
      alert('送信回数が制限を超えました。しばらく時間をおいてお試しください。');
      return;
    }

    if (!validateForm()) {
      return;
    }

    const subject = `焼肉ハウスたかみ 予約申込`;
    const body = `
予約申込内容

お名前：${formData.name}
電話番号：${formData.phone}
予約日：${formData.date}
予約時間：${formData.time}
人数：${formData.people}名様

備考：
${formData.notes}

※このメールは予約申込です。
※店舗からの返信をもって予約確定となります。
※当日のご予約はお電話でお願いいたします。

焼肉ハウス　たかみ
https://goo.gl/maps/ghR75n7UGrmAU1Xi9
営業時間：　17:00～23：00（L.O 22:30）
定休日：水曜日
住所：大阪府豊中:市蛍池北町3丁目2番8号
TEL：06-6844-0200
駐車場：隣のTimes駐車場をご利用ください。
    `.trim();

    window.location.href = `mailto:info@takami-29.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="reservation" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">ご予約</h2>
        <div className="text-center mb-8">
          <a
            href="tel:06-6844-0200"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Phone size={20} />
            <span>電話で予約する（06-6844-0200）</span>
          </a>
          <p className="mt-4 text-gray-600">または</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="お名前"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
              maxLength={50}
            />
            <FormInput
              label="電話番号"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              pattern="0[0-9]{9,10}"
            />
            <DatePicker
              value={formData.date}
              onChange={(date) => setFormData(prev => ({ ...prev, date }))}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                時間<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="">選択してください</option>
                {[...Array(13)].map((_, i) => {
                  const hour = 17 + Math.floor(i / 2);
                  const minute = i % 2 === 0 ? '00' : '30';
                  if (hour < 22 || (hour === 22 && minute === '00')) {
                    return (
                      <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
                        {`${hour}:${minute}`}
                      </option>
                    );
                  }
                  return null;
                })}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                人数<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="people"
                required
                value={formData.people}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="">選択してください</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}名様
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                備考
              </label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                maxLength={1000}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent ${errors.notes ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="当日のご予約はお電話でお願いしますご要望等ございましたらご記入ください。お子様用のお席、食器等もご準備いたします。"
              ></textarea>
              {errors.notes && (
                <p className="mt-1 text-sm text-red-500">{errors.notes}</p>
              )}
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-sm text-gray-600">
              ※予約ボタンを押すと、ご利用のメールソフトが起動します。<br />
              ※当日のご予約はお電話でお願いします。<br />
              ※予約内容を確認の上、送信してください。<br />
              ※店舗からの返信をもって予約確定となります。<br />
              ※メールソフトが起動しない場合は、<a href="tel:06-6844-0200" className="text-red-600 hover:underline">お電話（06-6844-0200）</a>でご予約ください。
            </p>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400"
              disabled={submitAttempts >= 3}
            >
              メールで予約する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}