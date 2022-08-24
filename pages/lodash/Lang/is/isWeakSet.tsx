import type { NextPage } from 'next'
import { isWeakSet } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isWeakSet(new WeakSet)
  console.log(res1)

  const res2 = isWeakSet(new Set)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isWeakSet</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
