'use server';

import { Resend } from 'resend';
import ContactEmail from '@/components/Emails/ContactEmail';
import { createSignal } from '@/utils/createFormToken';

export type FormState = 'initial' | 'success' | 'error';

const TIME_THRESHOLD = 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

const delay = async (ms = TIME_THRESHOLD) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const submitForm = async (
  _state: FormState,
  formData: FormData | null,
): Promise<FormState> => {
  try {
    if (!formData) return 'initial';

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

    if (signal !== expected || Date.now() - Number(timestamp) < TIME_THRESHOLD) {
      console.warn('🤖 Bot form submission detected');
      await delay();
      return 'success';
    }

    const name = String(formData.get('name'));
    const email = String(formData.get('email'));
    const message = String(formData.get('message'));

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['max_sommerfeld@web.de'],
      subject: 'New Contact Form Submission',
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      const message = `An error has occurred: ${error.statusCode}`;
      throw new Error(message);
    }
    return 'success';
  } catch (error) {
    console.error(error);
    return 'error';
  }
};
