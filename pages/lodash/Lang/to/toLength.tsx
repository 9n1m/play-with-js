import type { NextPage } from 'next'
import { toLength } from 'lodash'

function runDemo1() {
  debugger
  const res1 = toLength(3.2)
  console.log(res1)

  const res2 = toLength(Number.MIN_VALUE)
  console.log(res2)

  const res3 = toLength(Infinity)
  console.log(res3)

  const res4 = toLength('3.2')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toLength</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
