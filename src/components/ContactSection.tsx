import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import type { FormEvent } from 'react'
import { PROFILE } from '../data/profile'
import { NotConfiguredError, sendInquiry } from '../lib/sendInquiry'
import { btnPrimary } from './buttonStyles'
import { fieldClass, labelClass } from './fieldStyles'
import { Section } from './Section'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// `label` is a key in the language files (contact.<label>). The location text comes from common.location.
const INFO = [
  { icon: faEnvelope, label: 'email', value: PROFILE.email, href: PROFILE.mailUrl },
  { icon: faPhone, label: 'phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
  { icon: faLocationDot, label: 'location', value: null },
] as const

export function ContactSection() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Hidden "website" field: real people leave it empty, bots fill it in.
    if (data.get('website')) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      await sendInquiry({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        message: String(data.get('message') ?? ''),
        source: 'Contact section',
      })
      form.reset()
      setStatus('sent')
    } catch (error) {
      if (error instanceof NotConfiguredError) console.error(error.message)
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title={t('section.contact')}>
      <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
        <div>
          <p className="leading-relaxed text-muted">
            {t('contact.intro')}
          </p>
          <ul className="mt-8 space-y-5">
            {INFO.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-primary">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted">{t(`contact.${item.label}`)}</p>
                  {'href' in item ? (
                    <a href={item.href} dir="ltr" className="inline-block break-words font-semibold hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{t('common.location')}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className={labelClass}>{t('contact.name')}</label>
              <input id="c-name" name="name" required maxLength={80} autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="c-email" className={labelClass}>{t('contact.email')}</label>
              <input id="c-email" name="email" type="email" dir="ltr" required maxLength={120} autoComplete="email" className={fieldClass} />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="c-message" className={labelClass}>{t('contact.message')}</label>
            <textarea id="c-message" name="message" required rows={5} maxLength={2000} className={fieldClass} />
          </div>

          {/* Spam trap: hidden from people and screen readers. */}
          <div aria-hidden="true" className="sr-only">
            <input name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} cursor-pointer disabled:opacity-60`}>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === 'sent' && <span className="text-accent">{t('contact.sent')}</span>}
              {status === 'error' && (
                <span className="text-muted">
                  <Trans
                    i18nKey="contact.error"
                    values={{ email: PROFILE.email }}
                    components={{ mail: <a href={PROFILE.mailUrl} dir="ltr" className="text-accent underline" /> }}
                  />
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
