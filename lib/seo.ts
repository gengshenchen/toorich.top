export const seo = {
  title: 'chengengshen',
  description:
    '你好，我是karl',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://tootich.top'
      : 'http://localhost:3000'
  ),
} as const
