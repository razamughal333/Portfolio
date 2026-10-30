import { faCheck, faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useId, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import type { FormEvent, KeyboardEvent } from 'react'
import { JOB_TYPES, OTHER_WORK, WORK_TYPES } from '../data/contactOptions'
import { PROFILE } from '../data/profile'
import { SERVICES } from '../data/services'
import { NotConfiguredError, sendInquiry } from '../lib/sendInquiry'
import { btnOutline, btnPrimary } from './buttonStyles'
import { fieldClass, labelClass } from './fieldStyles'

const STEP_COUNT = 4
type Status = 'idle' | 'sending' | 'sent' | 'error'

// Pick-one / pick-many row used on steps 1 to 3.
function Choice({
  type,
  name,
  label,
  checked,
  onChange,
}: {
  type: 'checkbox' | 'radio'
  name: string
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent/50 ${
        checked ? 'border-accent bg-accent/10 text-text' : 'border-line bg-bg text-muted hover:border-accent/60'
      }`}
    >
      <input type={type} name={name} checked={checked} onChange={onChange} className="size-4 accent-[var(--accent)]" />
      {label}
    </label>
  )
}

// Fixed bottom-right button that opens the 4-step "Contact me" wizard on every page.
export function ContactWizard() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<Status>('idle')
  const [services, setServices] = useState<string[]>([])
  const [work, setWork] = useState('')
  const [otherWork, setOtherWork] = useState('')
  const [job, setJob] = useState('')

  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    setOpen(false)
    openerRef.current?.focus()
  }

  // While open: Esc closes, page behind can't scroll, focus moves into the dialog.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // On every step change, move focus to the dialog so keyboard and screen-reader users start at the top.
  useEffect(() => {
    if (open) dialogRef.current?.focus()
  }, [step, open])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      close()
      return
    }
    if (event.key !== 'Tab') return
    // Keep Tab inside the dialog.
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]',
    )
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const toggleService = (id: string) =>
    setServices((current) => (current.includes(id) ? current.filter((s) => s !== id) : [...current, id]))

  const canContinue =
    [services.length > 0, work === OTHER_WORK ? otherWork.trim().length > 0 : work.length > 0, job.length > 0][step] ?? true

  const reset = () => {
    setStep(0)
    setStatus('idle')
    setServices([])
    setWork('')
    setOtherWork('')
    setJob('')
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('website')) {
      setStatus('sent')
      return
    }
    setStatus('sending')
    const en = i18n.getFixedT('en')
    try {
      await sendInquiry({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
        // Emails always arrive in English, whichever language the visitor used.
        services: services.map((id) => en(`services.items.${id}.title`)),
        workType: work === OTHER_WORK ? otherWork.trim() : en(`wizard.work.${work}`),
        jobType: en(`wizard.job.${job}`),
        source: 'Contact me wizard',
      })
      setStatus('sent')
    } catch (error) {
      if (error instanceof NotConfiguredError) console.error(error.message)
      setStatus('error')
    }
  }

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-5 bottom-5 z-30 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-lg transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
      >
        <FontAwesomeIcon icon={faCommentDots} />
        {t('common.contactMe')}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-black/60 p-0 backdrop-blur-sm sm:place-items-center sm:p-5" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            onKeyDown={onKeyDown}
            className="max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl border border-line bg-surface p-6 outline-none sm:max-w-lg sm:rounded-3xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {status !== 'sent' && (
                  <p className="font-mono text-xs text-muted">
                    {t('wizard.stepOf', { n: step + 1, total: STEP_COUNT })}
                  </p>
                )}
                <h2 id={titleId} className="font-display text-2xl font-extrabold">
                  {status === 'sent' ? t('wizard.doneTitle') : (t('wizard.titles', { returnObjects: true }) as string[])[step]}
                </h2>
              </div>
              <button type="button" onClick={close} aria-label={t('wizard.close')} className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {status !== 'sent' && (
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: STEP_COUNT }, (_, index) => (
                  <span key={index} className={`h-1 flex-1 rounded-full ${index <= step ? 'bg-accent' : 'bg-line'}`} />
                ))}
              </div>
            )}

            {status === 'sent' ? (
              <div className="mt-8 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent/15 text-xl text-accent">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <p className="mt-4 text-muted">{t('wizard.doneText')}</p>
                <div className="mt-6 flex justify-center gap-3">
                  <button type="button" onClick={() => { reset(); close() }} className={`${btnPrimary} cursor-pointer`}>{t('wizard.done')}</button>
                </div>
              </div>
            ) : step < 3 ? (
              <div className="mt-6">
                {step === 0 && (
                  <fieldset>
                    <legend className="mb-3 text-sm text-muted">{t('wizard.q1')}</legend>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {SERVICES.map((service) => (
                        <Choice key={service.id} type="checkbox" name="service" label={t(`services.items.${service.id}.title`)} checked={services.includes(service.id)} onChange={() => toggleService(service.id)} />
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset>
                    <legend className="mb-3 text-sm text-muted">{t('wizard.q2')}</legend>
                    <div className="grid gap-2.5">
                      {[...WORK_TYPES, OTHER_WORK].map((option) => (
                        <Choice key={option} type="radio" name="work" label={t(`wizard.work.${option}`)} checked={work === option} onChange={() => setWork(option)} />
                      ))}
                    </div>
                    {work === OTHER_WORK && (
                      <div className="mt-3">
                        <label htmlFor="w-other" className="sr-only">{t('wizard.otherPlaceholder')}</label>
                        <input id="w-other" value={otherWork} onChange={(e) => setOtherWork(e.target.value)} maxLength={80} placeholder={t('wizard.otherPlaceholder')} className={fieldClass} />
                      </div>
                    )}
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset>
                    <legend className="mb-3 text-sm text-muted">{t('wizard.q3')}</legend>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {JOB_TYPES.map((option) => (
                        <Choice key={option} type="radio" name="job" label={t(`wizard.job.${option}`)} checked={job === option} onChange={() => setJob(option)} />
                      ))}
                    </div>
                  </fieldset>
                )}

                <div className="mt-8 flex items-center justify-between gap-3">
                  {step > 0 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className={`${btnOutline} cursor-pointer`}>{t('wizard.back')}</button>
                  ) : <span />}
                  <button type="button" disabled={!canContinue} onClick={() => setStep(step + 1)} className={`${btnPrimary} cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}>
                    {t('wizard.next')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="w-name" className={labelClass}>{t('wizard.name')}</label>
                  <input id="w-name" name="name" required maxLength={80} autoComplete="name" className={fieldClass} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="w-email" className={labelClass}>{t('wizard.email')}</label>
                    <input id="w-email" name="email" type="email" dir="ltr" required maxLength={120} autoComplete="email" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="w-phone" className={labelClass}>{t('wizard.phone')} <span className="font-normal text-muted">{t('wizard.optional')}</span></label>
                    <input id="w-phone" name="phone" type="tel" dir="ltr" maxLength={30} autoComplete="tel" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="w-message" className={labelClass}>{t('wizard.message')} <span className="font-normal text-muted">{t('wizard.optional')}</span></label>
                  <textarea id="w-message" name="message" rows={3} maxLength={2000} className={fieldClass} />
                </div>
                <div aria-hidden="true" className="sr-only">
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">
                  {status === 'error' && (
                    <Trans i18nKey="wizard.error" values={{ email: PROFILE.email }} components={{ mail: <a href={PROFILE.mailUrl} dir="ltr" className="text-accent underline" /> }} />
                  )}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <button type="button" onClick={() => setStep(2)} className={`${btnOutline} cursor-pointer`}>{t('wizard.back')}</button>
                  <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} cursor-pointer disabled:opacity-60`}>
                    {status === 'sending' ? t('wizard.sending') : t('wizard.send')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
