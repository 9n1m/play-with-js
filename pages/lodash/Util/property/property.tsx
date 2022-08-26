import type { NextPage } from 'next'
import { map, property, sortBy } from 'lodash'

function runDemo1() {
  debugger
  const objects = [
    { 'a': { 'b': 2 } },
    { 'a': { 'b': 1 } }
  ]

  const r1 = map(objects, property('a.b'))
  console.log(r1)

  const r2 = map(sortBy(objects, property(['a', 'b'])), 'a.b')
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>property</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
