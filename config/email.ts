export const emailConfig = {
  from: 'chengengshen@toorich.top',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://toorich.top`
      : 'http://localhost:3333',
}
