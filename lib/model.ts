export const models = [
  {
    label: 'GPT 4o mini',
    name: 'gpt-4o-mini',
    description: 'Mô hình cho các tác vụ nhanh và nhẹ',
  },
  {
    label: 'GPT 4o',
    name: 'gpt-4o',
    description: 'Mô hình cho các tác vụ phức tạp, nhiều bước',
  },
] as const;

export const DEFAULT_MODEL_NAME: Model['name'] = 'gpt-4o-mini';

export type Model = (typeof models)[number];
