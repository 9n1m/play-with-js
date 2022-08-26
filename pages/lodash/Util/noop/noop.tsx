import type { NextPage } from 'next'
import { noop, times } from 'lodash'

function runDemo1() {
  debugger
  const r1 = times(2, noop)
  console.log(r1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>noop</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
