import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({data: notes})
  })
  .post((req, res) => {
    const id = Date.now()
    const note = {...req.body, id}

    notes.push(note)
    res.json({data: note})
  })
export default handler


export async function getServerSideProps() {
  const res = await fetch(`https://localhost:3000/api/note/`)
  const { data } = await res.json()
  return {
    props: {notes: data}
  }
}