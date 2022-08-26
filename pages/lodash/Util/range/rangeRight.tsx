import type { NextPage } from 'next'
import { rangeRight } from 'lodash'

function runDemo1() {
  debugger

  const r1 = rangeRight(4)
  console.log(r1)

  const r2 = rangeRight(-4)
  console.log(r2)

  const r3 = rangeRight(1, 5)
  console.log(r3)

  const r4 = rangeRight(0, 20, 5)
  console.log(r4)

  const r5 = rangeRight(0, -4, -1)
  console.log(r5)

  const r6 = rangeRight(1, 4, 0)
  console.log(r6)

  const r7 = rangeRight(0)
  console.log(r7)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>rangeRight</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
