'use server';

const { createHmac } = await import('node:crypto');

export async function createFormToken(timestamp = Date.now()) {
  const sig = createHmac('sha256', process.env.FORM_SECRET).update(String(timestamp)).digest('hex');
  return `${timestamp}_${sig}`;
}
