import type { NextPage } from 'next'
import { inRange } from 'lodash'

function runDemo1() {
  debugger
  const res1 = inRange(3, 2, 4)
  console.log(res1)

  const res2 = inRange(4, 8)
  console.log(res2)

  const res3 = inRange(4, 2)
  console.log(res3)

  const res4 = inRange(2, 2)
  console.log(res4)

  const res5 = inRange(1.2, 2)
  console.log(res5)

  const res6 = inRange(5.2, 4)
  console.log(res6)

  const res7 = inRange(-3, -2, -6)
  console.log(res7)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>inRange</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
