import type { NextPage } from 'next'
import { conforms, filter } from 'lodash'

function runDemo1() {
  debugger
  var objects = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
  ]

  // @ts-ignore
  const res1 = filter(objects, conforms({ 'b': function (n) { return n > 1 } }))
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>conforms</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
