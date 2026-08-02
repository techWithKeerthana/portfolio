import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { contactData } from '../data/portfolioData'

type ContactFormState = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactFormState, string>>

const initialForm: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

function validateForm(values: ContactFormState): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`

    setForm(initialForm)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="grid gap-8 rounded-[2rem] border border-mistLine/30 bg-indigoSlate/55 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:p-10"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-tealSignal">
            Contact
          </p>
          <h2 className="type-section-title mt-4 text-ice">
            Let us build something thoughtful and useful.
          </h2>
          <p className="mt-4 text-base text-[#d4e3fb]">
            Reach out for internships, collaborations, or full-time opportunities.
          </p>

          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex min-h-11 items-center gap-2 break-all text-sm font-semibold text-ice transition hover:text-tealSignal"
              >
                <Mail size={16} aria-hidden="true" />
                {contactData.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactData.phone}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ice transition hover:text-tealSignal"
              >
                <Phone size={16} aria-hidden="true" />
                {contactData.phone}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-ice">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="min-h-11 w-full rounded-xl border border-mistLine/35 bg-navy/45 px-4 py-2.5 text-sm text-ice outline-none ring-tealSignal/70 transition focus:ring"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1 text-xs text-amberPulse">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-ice">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="min-h-11 w-full rounded-xl border border-mistLine/35 bg-navy/45 px-4 py-2.5 text-sm text-ice outline-none ring-tealSignal/70 transition focus:ring"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-xs text-amberPulse">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ice">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-xl border border-mistLine/35 bg-navy/45 px-4 py-2.5 text-sm text-ice outline-none ring-tealSignal/70 transition focus:ring"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1 text-xs text-amberPulse">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-tealSignal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#79cecc] sm:w-auto"
          >
            Send Message
          </button>

          {isSubmitted ? (
            <p className="text-sm font-medium text-tealSignal">
              Thanks! Your email app should open with a prefilled message.
            </p>
          ) : null}
        </form>
      </motion.div>
    </section>
  )
}
