import type { NextPage } from 'next'
import { isArrayBuffer } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isArrayBuffer(new ArrayBuffer(2))
  console.log(res1)

  const res2 = isArrayBuffer(new Array(2))
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isArrayBuffer</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
