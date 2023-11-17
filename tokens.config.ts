import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    gra: {},
    g: {},
    reg: {}
  },

  docus: {
    header: {
      logo: {
        height: {
          initial: '1.5rem',
          sm: '1.75rem'
        }
      },

      title: {
        color: {
          static: {
            initial: 'var(--color-red-900)'
          }
        }
      }
    }
  }
})