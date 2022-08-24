import type { NextPage } from 'next'
import { isNative } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isNative(Array.prototype.push)
  console.log(res1)

  const res2 = isNative(isNative)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isNative</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
