// フォームバリデーションルール
export const VALIDATION_RULES = {
  name: {
    maxLength: 50,
    pattern: /^[ぁ-んァ-ン一-龥a-zA-Z\s]+$/,
    errorMessage: '正しい名前を入力してください（50文字以内）'
  },
  phone: {
    pattern: /^(0[0-9]{9,10})$/,
    errorMessage: '正しい電話番号を入力してください（ハイフンなし）'
  },
  notes: {
    maxLength: 1000,
    pattern: /^[^<>]*$/,
    errorMessage: '特殊文字は使用できません（1000文字以内）'
  }
} as const;

// 入力値のバリデーション
export const validateField = (
  name: string,
  value: string
): string | null => {
  const rule = VALIDATION_RULES[name as keyof typeof VALIDATION_RULES];
  if (!rule) return null;

  if (rule.maxLength && value.length > rule.maxLength) {
    return rule.errorMessage;
  }

  if (rule.pattern && !rule.pattern.test(value)) {
    return rule.errorMessage;
  }

  return null;
};