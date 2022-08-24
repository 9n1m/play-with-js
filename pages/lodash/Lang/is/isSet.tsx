import type { NextPage } from 'next'
import { isSet } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isSet(new Set)
  console.log(res1)

  const res2 = isSet(new WeakSet)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isSet</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
