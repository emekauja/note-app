/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import  Link from 'next/link'
 
export default () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div sx={{display: 'grid', placeItems: 'center'}}>
      <div sx={{variant: 'container.page'}}>
        <h1>Note: {id} </h1>
      </div>
      <br />
      <button onClick={e => router.push('/')} sx={{bg: 'black', fontSize: 3, fontWeight: 'bold', border: '0.5px solid primary', color: 'white', padding: '10px'}}>
        Home 🙉  
      </button>
    </div>
  )
}

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  if(!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const { data } = await response.json()

  if (data) {
    return {
      props: {note: data}
    }
  }
}


