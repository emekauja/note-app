/** @jsx jsx */
import { jsx } from 'theme-ui'

export default () => {
  return (
    <footer sx={{position: 'fixed', textAlign: 'center', bottom: 0, left: '50%', paddingBottom: '20px'}}>
      <a sx={{
        color: 'text',
        fontSize: 4,
        cursor: 'pointer',
        fontWeight: 'bold',
        bg: 'primary',
        padding: '10px',
        borderRadius: '50px'
      }}
      href={process.env.HELP_APP_URL}
      >
        Help
      </a>
    </footer>
  )
}
