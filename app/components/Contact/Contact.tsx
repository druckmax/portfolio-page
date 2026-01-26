'use client';

import { startTransition, useActionState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './_Contact.scss';

import { getTranslations } from '../i18n/getTranslations';
import { CTA } from '../shared/CTA/CTA';
import { type FormState, submitForm } from './actions/submitForm';

export default function Contact() {
  const t = getTranslations();
  const [state, submit, isPending] = useActionState(submitForm, 'initial' as FormState);

  useEffect(() => {
    switch (state) {
      case 'error':
        toast.error('Sorry, something went wrong');
        break;
      case 'success':
        toast.success('Thanks for your submit');
        break;
      default:
        return;
    }
    startTransition(() => submit(null));
  }, [state, submit]);

  return (
    <>
      <Toaster position="top-center" />
      <div id="contact" className="contact-container">
        <div className="content-container">
          <div className="contact-heading">
            <h2>{t('contact.headline')}</h2>
          </div>
          <form action={submit} name="contact">
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
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
              />
            </div>
            <CTA className="btn-contact" type="submit" isPending={isPending}>
              {t('contact.cta')}
            </CTA>
          </form>
        </div>
      </div>
    </>
  );
}
