'use server';

const { createHmac } = await import('node:crypto');

export const createSignal = async (timestamp: number | string) =>
  createHmac('sha256', process.env.FORM_SECRET).update(String(timestamp)).digest('hex');

export async function createFormToken(timestamp = Date.now()) {
  const sig = await createSignal(timestamp);
  return `${timestamp}_${sig}`;
}
