import type { NextPage } from 'next'
import { isWeakMap } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isWeakMap(new WeakMap)
  console.log(res1)

  const res2 = isWeakMap(new Map)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isWeakMap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
