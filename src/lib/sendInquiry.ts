import emailjs from '@emailjs/browser'

export type Inquiry = {
  name: string
  email: string
  phone?: string
  services?: string[]
  workType?: string
  jobType?: string
  message?: string
  source: string // which form sent it
}

// Empty fields become a dash so the email never has blank gaps.
const orDash = (value?: string) => (value && value.trim() ? value.trim() : '—')

export class NotConfiguredError extends Error {}

// Sends one inquiry through EmailJS. Throws if it fails, so the form can show an error.
export async function sendInquiry(inquiry: Inquiry) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new NotConfiguredError('EmailJS keys are missing from .env')
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: inquiry.name.trim(),
      from_email: inquiry.email.trim(),
      phone: orDash(inquiry.phone),
      services: inquiry.services?.length ? inquiry.services.join(', ') : '—',
      work_type: orDash(inquiry.workType),
      job_type: orDash(inquiry.jobType),
      message: orDash(inquiry.message),
      source: inquiry.source,
    },
    { publicKey },
  )
}
