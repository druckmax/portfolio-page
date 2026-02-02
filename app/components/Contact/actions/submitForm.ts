'use server';

import { createSignal } from '@/utils/createFormToken';

export type FormState = 'initial' | 'success' | 'error';

const TIME_THRESHOLD = 3000;

const delay = async (ms = TIME_THRESHOLD) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const submitForm = async (
  _state: FormState,
  formData: FormData | null,
): Promise<FormState> => {
  try {
    if (!formData) return 'initial';
    // biome-ignore lint/style/noNonNullAssertion: <Is defined>
    const apiKey = process.env.STATIC_FORMS_KEY!;
    formData.append('apiKey', apiKey);

    const honeypot = formData.get('honeypot');
    const honeypot2 = formData.get('company');

    if (honeypot || honeypot2) {
      console.warn('🍯 Honeypot was filled out');
      await delay();
      return 'success';
    }

    // Fake a success, but don't actually send the request if submission don't come from the website or were done in under 3 seconds
    const [timestamp, signal] = String(formData.get('token')).split('_');
    const expected = await createSignal(timestamp);

    console.log(signal, expected);
    console.log(Date.now() - +timestamp);

    if (signal !== expected || Date.now() - Number(timestamp) < TIME_THRESHOLD) {
      console.warn('🤖 Bot form submission detected');
      await delay();
      return 'success';
    }

    const response = await fetch('https://api.staticforms.dev/submit', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    return 'success';
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
