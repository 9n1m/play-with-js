import type { NextPage } from 'next'
import { noConflict } from 'lodash'

function runDemo1() {
  debugger
  const r1 = noConflict()
  console.log(r1)
}

const Page: NextPage = () => {
  return (
    <>
      <h2 className='title'>noConflict</h2>
      <div className='block buttons'>
        <button className='button is-primary' onClick={() => runDemo1()}>runDemo1</button>
      </div>
    </>
  )
}

export default Page
