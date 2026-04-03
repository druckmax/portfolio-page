'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import { startTransition, useActionState, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './_Contact.scss';

import { getTranslations } from '../i18n/getTranslations';
import { CTA } from '../shared/CTA/CTA';
import { type FormState, submitForm } from './actions/submitForm';

const EMPTY_FIELDS = { name: '', email: '', message: '' };

export default function Contact({
  formToken,
  turnstileSiteKey,
}: {
  formToken: string;
  turnstileSiteKey: string;
}) {
  const t = getTranslations();
  const [state, submit, isPending] = useActionState(submitForm, 'initial' as FormState);
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    switch (state) {
      case 'error':
        toast.error('Sorry, something went wrong');
        break;
      case 'success':
        toast.success('Thanks for your submit');
        setFields(EMPTY_FIELDS);
        break;
      default:
        return;
    }
    startTransition(() => submit(null));
  }, [state, submit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) return;
    const formData = new FormData(e.currentTarget);
    formData.append('turnstileToken', turnstileToken);
    startTransition(() => submit(formData));
    setTurnstileToken('');
  };

  return (
    <>
      <Toaster position="top-center" />
      <div id="contact" className="contact-container">
        <div className="content-container">
          <div className="contact-heading">
            <h2>{t('contact.headline')}</h2>
          </div>
          <form onSubmit={handleSubmit} name="contact">
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            {/* Honeypot 2*/}
            <input
              type="text"
              name="company"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            {/* Trying to reduce bot submissions */}
            <input
              type="text"
              name="token"
              defaultValue={formToken}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="emailName">
              <div className="input-group">
                <label htmlFor="name">{t('contact.name.label')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  minLength={2}
                  maxLength={50}
                  required
                  placeholder={t('contact.name.placeholder')}
                  disabled={isPending}
                  value={fields.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">{t('contact.email.label')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={50}
                  required
                  placeholder={t('contact.email.placeholder')}
                  disabled={isPending}
                  value={fields.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">{t('contact.message.label')}</label>
              <textarea
                name="message"
                id="message"
                minLength={20}
                maxLength={1000}
                required
                placeholder={t('contact.message.placeholder')}
                disabled={isPending}
                value={fields.message}
                onChange={handleChange}
              />
              <Turnstile
                siteKey={turnstileSiteKey}
                className="turnstile-widget"
                options={{ theme: 'dark', size: 'normal', appearance: 'interaction-only' }}
                onSuccess={setTurnstileToken}
                onError={() => setTurnstileToken('')}
                onExpire={() => setTurnstileToken('')}
              />
            </div>
            <CTA
              className="btn-contact"
              type="submit"
              isPending={isPending}
              disabled={!turnstileToken}
            >
              {t('contact.cta')}
            </CTA>
          </form>
        </div>
      </div>
    </>
  );
}
