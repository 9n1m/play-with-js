import type { NextPage } from 'next'
import { isInteger } from 'lodash'

function runDemo1() {
  debugger
  const res1 = isInteger(3)
  console.log(res1)

  const res2 = isInteger(Number.MIN_VALUE)
  console.log(res2)

  const res3 = isInteger(Infinity)
  console.log(res3)

  const res4 = isInteger('3')
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>isInteger</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
