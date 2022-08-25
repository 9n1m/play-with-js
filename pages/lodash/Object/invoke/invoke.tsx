import type { NextPage } from 'next'
import { invoke } from 'lodash'

function runDemo1() {
  debugger
  var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }

  const res1 = invoke(object, 'a[0].b.c.slice', 1, 3)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>invoke</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
