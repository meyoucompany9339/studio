import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { trackConsultationClick } from '../../analytics/ga'
import ContactModal from './ContactModal'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [defaults, setDefaults] = useState({})

  const openContact = useCallback((options = {}) => {
    trackConsultationClick(options.placement || options.format || 'general')
    setDefaults({
      format: options.format || 'consult',
      siteType: options.siteType || '',
    })
    setOpen(true)
  }, [])

  const closeContact = useCallback(() => {
    setOpen(false)
  }, [])

  const value = useMemo(
    () => ({ openContact, closeContact, isOpen: open }),
    [openContact, closeContact, open],
  )

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal
        open={open}
        onClose={closeContact}
        defaultFormat={defaults.format}
        defaultSiteType={defaults.siteType}
      />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }
  return ctx
}
