import type { NextPage } from 'next'
import { isSafeInteger } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isSafeInteger(3)
  console.log(res1)

  const res2 = isSafeInteger(Number.MIN_VALUE)
  console.log(res2)

  const res3 = isSafeInteger(Infinity)
  console.log(res3)

  const res4 = isSafeInteger('3')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isSafeInteger</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
