import type { NextPage } from 'next'
import { random } from 'lodash'

function runDemo1() {
  debugger
  const res1 = random(0, 5)
  console.log(res1)

  const res2 = random(5)
  console.log(res2)

  const res3 = random(5, true)
  console.log(res3)

  const res4 = random(1.2, 5.2)
  console.log(res4)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>random</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
