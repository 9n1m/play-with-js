import type { NextPage } from 'next'
import { over } from 'lodash'

function runDemo1() {
  debugger
  const func = over([Math.max, Math.min])

  const r1 = func(1, 2, 3, 4)
  console.log(r1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>over</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
