import type { NextPage } from 'next'
import { clamp } from 'lodash'

function runDemo1() {
  debugger
  const res1 = clamp(-10, -5, 5)
  console.log(res1)

  const res2 = clamp(10, -5, 5)
  console.log(res2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>clamp</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
