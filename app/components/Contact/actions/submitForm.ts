'use server';

export type FormState = 'initial' | 'success' | 'error';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const encode = (data: FormValues): string => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key as keyof FormValues])}`)
    .join('&');
};

export const submitForm = async (_state: FormState, formData: FormData): Promise<FormState> => {
  try {
    const name = String(formData.get('name'));
    const email = String(formData.get('email'));
    const message = String(formData.get('message'));

    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ name, email, message }),
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
