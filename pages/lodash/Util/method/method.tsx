import type { NextPage } from 'next'
import { constant, map, method } from 'lodash'

function runDemo1() {
  debugger
  const objects = [
    { 'a': { 'b': constant(2) } },
    { 'a': { 'b': constant(1) } }
  ]

  const r1 = map(objects, method('a.b'));
  console.log(r1)

  const r2 = map(objects, method(['a', 'b']))
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>method</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
