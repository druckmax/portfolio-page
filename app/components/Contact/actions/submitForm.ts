'use server';

export type FormState = 'initial' | 'success' | 'error';

export const submitForm = async (
  _state: FormState,
  formData: FormData | null,
): Promise<FormState> => {
  try {
    if (!formData) return 'initial';
    // biome-ignore lint/style/noNonNullAssertion: <Is defined>
    const apiKey = process.env.STATIC_FORMS_KEY!;

    console.log(apiKey);
    formData.append('apiKey', apiKey);

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
