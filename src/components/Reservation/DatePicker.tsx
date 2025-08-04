import React from 'react';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.getDay();

    // 火曜日（2）と水曜日（3）が選択された場合
    if (dayOfWeek === 2) {
      alert('火曜日は定休日のため、予約できません。');
      return;
    }
    if (dayOfWeek === 3) {
      alert('水曜日は定休日のため、予約できません。');
      return;
    }

    onChange(e.target.value);
  };

  // 火曜日と水曜日を選択できないようにする
  const disableTuesdaysAndWednesdays = () => {
    const today = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(today.getFullYear() + 1);

    // YYYY-MM-DD形式の文字列を生成
    const disabledDates = [];
    const current = new Date(today);

    while (current <= oneYearFromNow) {
      if (current.getDay() === 2 || current.getDay() === 3) { // 火曜日と水曜日
        const dateString = current.toISOString().split('T')[0];
        disabledDates.push(dateString);
      }
      current.setDate(current.getDate() + 1);
    }

    return disabledDates.join(',');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">
          日付
        </label>
        <span className="text-sm text-red-600 font-medium">
          定休日：火・水曜日
        </span>
      </div>
      <input
        type="date"
        value={value}
        onChange={handleDateChange}
        required
        min={new Date().toISOString().split('T')[0]}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
        // 火曜日と水曜日を選択できないようにする
        data-disabled-dates={disableTuesdaysAndWednesdays()}
      />
    </div>
  );
}