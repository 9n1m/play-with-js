import type { NextPage } from 'next'
import { constant, times } from 'lodash'

function runDemo1() {
  debugger
  const r1 = times(3, String)
  console.log(r1)

  const r2 = times(4, constant(0))
  console.log(r2)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>times</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
