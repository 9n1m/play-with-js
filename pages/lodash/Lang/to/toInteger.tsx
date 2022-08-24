import type { NextPage } from 'next'
import { toInteger } from 'lodash'

function runDemo1() {
  debugger
  const res1 = toInteger(3.2)
  console.log(res1)

  const res2 = toInteger(Number.MIN_VALUE)
  console.log(res2)

  const res3 = toInteger(Infinity)
  console.log(res3)

  const res4 = toInteger('3.2')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>toInteger</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
