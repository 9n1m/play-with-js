import type { NextPage } from 'next'
import { invert } from 'lodash'

function runDemo1() {
  debugger
  const object = { 'a': 1, 'b': 2, 'c': 1 }

  const res1 = invert(object)
  console.log(res1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>invert</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
