import type { NextPage } from 'next'
import { isTypedArray } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isTypedArray(new Uint8Array)
  console.log(res1)

  const res2 = isTypedArray([])
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isTypedArray</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
