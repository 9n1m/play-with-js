import type { NextPage } from 'next'
import { isBuffer } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isBuffer(new Buffer(2))
  console.log(res1)

  const res2 = isBuffer(new Uint8Array(2))
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isBuffer</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
