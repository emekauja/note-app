/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useColorMode } from 'theme-ui'

const Nav = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
      <nav sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
        <Link href='/'>
          <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
        </Link>
  
        <Link href='/notes'>
          <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
        </Link>
  
        <button
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }} sx={{backgroundColor: 'black', color: 'white', borderColor: 'black', borderRadius: '20px', fontWeight: 'bold', fontSize: 2, cursor: 'pointer', padding: '10px' }}>
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  )
}

export default Nav