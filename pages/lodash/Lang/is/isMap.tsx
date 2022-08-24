import type { NextPage } from 'next'
import { isMap } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isMap(new Map)
  console.log(res1)

  const res2 = isMap(new WeakMap)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isMap</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
