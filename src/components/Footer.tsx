import { Trans, useTranslation } from 'react-i18next'
import { LikeButton } from './LikeButton'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-line py-10 text-center text-sm text-muted">
      <Logo className="mx-auto h-8" />
      <p className="mt-4">
        <Trans i18nKey="footer.made" components={{ b: <span className="font-semibold text-text" /> }} />
      </p>
      <p className="mt-1">{t('footer.rights')}</p>
      <LikeButton />
    </footer>
  )
}
